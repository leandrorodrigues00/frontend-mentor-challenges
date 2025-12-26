import { Component } from '@angular/core';
import { FeatureCard } from '../feature-card/feature-card';
import { featureList } from '../../data/feature-list';

@Component({
  selector: 'app-main-content',
  imports: [FeatureCard],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {
  featureList = featureList;

  getFeatureClass(feature: { title: string }): string {
    return (
      'feature-item-' +
      (feature?.title || '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
    );
  }
}
