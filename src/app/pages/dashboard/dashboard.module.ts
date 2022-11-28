import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { PageItemComponent } from './components/page-item/page-item.component';
import { MatIconModule } from '@angular/material/icon';
import { AssignedTasksComponent } from './components/assigned-tasks/assigned-tasks.component';
import { StickyNotesComponent } from './components/sticky-notes/sticky-notes.component';
import { StickyNotesCardComponent } from './components/sticky-notes-card/sticky-notes-card.component';
import { AssignedTasksItemComponent } from './components/assigned-tasks-item/assigned-tasks-item.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  declarations: [DashboardComponent, CardComponent, PageItemComponent, AssignedTasksComponent, StickyNotesComponent, StickyNotesCardComponent, AssignedTasksItemComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
