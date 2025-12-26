export interface featureCard {
  title: string;
  description: string;
  cardImage: string;
  borderColor: borderColor;
}

export type borderColor = 'red' | 'cyan' | 'orange' | 'blue';
