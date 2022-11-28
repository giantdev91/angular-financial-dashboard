import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactCard } from '../../models/contact-card.model';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss']
})
export class ChatCardComponent implements OnInit {

  @Input() message!: ContactCard;
  @Input() photoURL!: string;
  @Output() backEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    this.backEvent.emit()
  }
}
