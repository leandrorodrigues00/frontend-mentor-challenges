import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAdviceResponse } from "../interfaces/advice-response.interface";

@Injectable({
  providedIn: "root",
})
export class AdviceService {
  constructor(protected readonly _httpClient: HttpClient) {}

  getAdvice() {
    return this._httpClient.get<{ slip: IAdviceResponse }>(
      "https://api.adviceslip.com/advice",
    );
  }
}
