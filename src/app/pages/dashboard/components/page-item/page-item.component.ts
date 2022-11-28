import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../../models/card.model';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.scss']
})
export class PageItemComponent implements OnInit {


  @Input() item!: Page;
  @Input() color!: string;
  colorStyle: any;

  constructor() { }

  ngOnInit(): void {
    this.colorStyle = { ['color']: this.color };
  }

}
