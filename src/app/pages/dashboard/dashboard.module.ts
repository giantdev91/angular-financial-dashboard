import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AssignedTasksComponent } from './components/assigned-tasks/assigned-tasks.component';
import { StickyNotesComponent } from './components/sticky-notes/sticky-notes.component';
import { StickyNotesCardComponent } from './components/sticky-notes-card/sticky-notes-card.component';
import { AssignedTasksItemComponent } from './components/assigned-tasks-item/assigned-tasks-item.component';
import { SharedModule } from '@root/shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  declarations: [
    DashboardComponent,
    AssignedTasksComponent,
    StickyNotesComponent,
    StickyNotesCardComponent,
    AssignedTasksItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
