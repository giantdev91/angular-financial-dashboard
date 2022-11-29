import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '@root/shared/models/card/card-item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {


  @Input() item!: CardItem;
  @Input() color!: string;
  colorStyle: any;

  constructor() { }

  ngOnInit(): void {
    this.colorStyle = { ['color']: this.color };
  }

}
