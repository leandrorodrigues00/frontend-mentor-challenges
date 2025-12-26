import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content';

@Component({
  selector: 'app-root',
  imports: [Header, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('four-card');
}
