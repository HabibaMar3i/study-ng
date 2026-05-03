import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterStore } from './signal-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('study-ng');
  protected readonly counter = new CounterStore();
}
