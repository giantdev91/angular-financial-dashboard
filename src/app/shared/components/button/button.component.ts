import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color = 'primary';
  @Input() classes: string;

  @Input() text: string;
  @Output() onTrigger = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.onTrigger.emit();
  }
}
