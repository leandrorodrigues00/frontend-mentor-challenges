import { featureCard } from '../interfaces/feature-card.interface';

export const featureList: featureCard[] = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    cardImage: '/images/icon-supervisor.svg',
    borderColor: 'cyan',
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    cardImage: '/images/icon-team-builder.svg',
    borderColor: 'red',
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    cardImage: '/images/icon-karma.svg',
    borderColor: 'orange',
  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    cardImage: '/images/icon-calculator.svg',
    borderColor: 'blue',
  },
];
