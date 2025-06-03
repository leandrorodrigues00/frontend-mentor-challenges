import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() showGoBack: boolean = false;
  @Input() redirectUrl: string = '';
  @Input() showConfirmButton: boolean = false;
  @Output() nextStepClicked = new EventEmitter<void>();

  constructor(protected _location: Location) {}

  onGoBackClick(): void {
    this._location.back();
  }

  onNextStepClick(): void {
    this.nextStepClicked.emit();
  }
}
