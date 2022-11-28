import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTasksItemComponent } from './assigned-tasks-item.component';

describe('AssignedTasksItemComponent', () => {
  let component: AssignedTasksItemComponent;
  let fixture: ComponentFixture<AssignedTasksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedTasksItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedTasksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
