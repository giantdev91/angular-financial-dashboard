import { Component, Input, OnInit } from '@angular/core';
import { ContactCard } from '../../models/contact-card.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact!: ContactCard;

  constructor() { }

  ngOnInit(): void {
  }

}
