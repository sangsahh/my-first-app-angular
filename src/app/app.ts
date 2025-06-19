import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  // styleUrl: './app.css'
  styles: [`
    h3{
      color: dodgerblue;
    }
    `]
})
export class App {
  protected name = 'kim';
}
