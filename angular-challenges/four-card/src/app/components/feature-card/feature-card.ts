import { Component, input } from '@angular/core';
import { featureCard } from '../../interfaces/feature-card.interface';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss',
})
export class FeatureCard {
  featureData = input.required<featureCard>();
}
