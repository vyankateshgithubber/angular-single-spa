import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'navbar-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'navbar';
  sendMessage() {
    const event = new CustomEvent('custom-event-name', {
      detail: { message: 'Hello from Nav bar using custom Event!' }
    });
    window.dispatchEvent(event);

  }
}
