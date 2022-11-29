import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent implements OnInit {

  showCalender: boolean = true;
  ButtonText: string = 'View Emails'
  constructor() { }

  ngOnInit(): void {
  }

  ChangeView(): void {
    this.ButtonText = this.ButtonText === 'View Calender' ? 'View Emails' : 'View Calender';
    this.showCalender = !this.showCalender
  }
}
