import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

import { CardComponent } from './components/card/card.component';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';

@NgModule({
  declarations: [CardComponent, PrimaryInputComponent],
  imports: [CommonModule, RouterModule, NgxMaskModule.forRoot()],
  exports: [CardComponent, PrimaryInputComponent],
})
export class SharedModule {}
