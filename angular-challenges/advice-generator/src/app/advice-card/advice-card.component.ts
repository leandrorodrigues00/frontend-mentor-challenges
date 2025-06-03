import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { IAdviceResponse } from "../interfaces/advice-response.interface";
import { AdviceService } from "../services/advice.service";

@Component({
  selector: "app-advice-card",
  templateUrl: "./advice-card.component.html",
  styleUrls: ["./advice-card.component.scss"],
})
export class AdviceCardComponent implements OnInit, OnDestroy {
  protected _subscriptions$ = new Subscription();
  advice?: IAdviceResponse;
  isFetching = false;
  hasError = false;

  constructor(protected readonly _adviceSvc: AdviceService) {}

  ngOnInit(): void {
    this.fetchAdvice();
  }

  fetchAdvice() {
    this.isFetching = true;
    const ADD_ADVICE = this._adviceSvc.getAdvice().subscribe({
      next: (advice) => (this.advice = { ...advice.slip }),
      error: (error) => this._handleError(error),
      complete: () => {
        this.isFetching = false;
      },
    });
    this._subscriptions$.add(ADD_ADVICE);
  }

  protected _handleError(error: Error): void {
    this.hasError = true;
    this.isFetching = false;
    console.error("Advice API Error:", error);
  }

  ngOnDestroy() {
    this._subscriptions$.unsubscribe();
  }
}
