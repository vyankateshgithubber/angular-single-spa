import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as marked from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-chat-summary',
  templateUrl: './chat-summary.component.html',
  styleUrls: ['./chat-summary.component.css'],
  standalone: false
})
export class ChatSummaryComponent {
  chatHistory: string = '';
  summary: string = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  onSubmit() {
    let chats;
    try {
      chats = JSON.parse(this.chatHistory); // Parse the chat history input as JSON
    } catch (error) {
      console.error('Invalid JSON format:', error);
      return;
    }

    this.http.post<any>('http://127.0.0.1:5000/AbstractiveSummarize', chats)
      .pipe(
        catchError(error => {
          console.error('Error occurred:', error);
          console.error('Error details:', error.message);
          return throwError(error);
        })
      )
      .subscribe(async response => {
        this.summary = await marked.parse(response.summary); // Sanitize the HTML
      });
  }
}