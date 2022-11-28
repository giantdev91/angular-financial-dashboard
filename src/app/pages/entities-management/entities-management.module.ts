import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesManagementComponent } from './components/entities-management/entities-management.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { EntityInformationComponent } from './components/entity-information/entity-information.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProfileOverviewComponent } from './components/profile-overview/profile-overview.component';
import { ProfileRatioComponent } from './components/profile-ratio/profile-ratio.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Route[] = [
  {
    path: '',
    component: EntitiesManagementComponent
  }
];

@NgModule({
  declarations: [
    EntitiesManagementComponent,
    HeaderComponent,
    EntityInformationComponent,
    ProfileOverviewComponent,
    ProfileRatioComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ]
})
export class EntitiesManagementModule { }
