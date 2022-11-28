import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BackLeftSideBarComponent } from './components/back-left-side-bar/back-left-side-bar.component';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class LeftSideBarComponent implements OnInit {

  flip: string = 'inactive';
  @ViewChild(BackLeftSideBarComponent) BackLeftSideBarComponent!: BackLeftSideBarComponent;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    this.BackLeftSideBarComponent.animationState = 'in';
  }
}
