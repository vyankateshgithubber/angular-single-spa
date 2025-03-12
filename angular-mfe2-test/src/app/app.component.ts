import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'AI Hub';
  message: string = "";

  ngOnInit() {
    window.addEventListener('custom-event-name', this.handleCustomEvent.bind(this));
  }

  handleCustomEvent(event: Event) {
    const customEvent = event as CustomEvent;
    this.message = customEvent.detail.message;
    console.log('Received message:', this.message);
  }
    
}
