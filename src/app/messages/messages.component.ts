import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-messages',
  styleUrls: ['./messages.component.css'],
  template: `
    <div *ngIf="messageService.messages.length">

      <h2>Messages</h2>
      <button type="button" class="clear"
              (click)="messageService.clear()">Clear messages</button>
      <div *ngFor='let message of messageService.messages'> {{message}} </div>

    </div>
  `
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
