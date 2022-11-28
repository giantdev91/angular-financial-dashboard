import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-tasks',
  templateUrl: './assigned-tasks.component.html',
  styleUrls: ['./assigned-tasks.component.scss']
})
export class AssignedTasksComponent implements OnInit {

  items: any[] = [
    {},
    {},
    {},
    {},
    {},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
