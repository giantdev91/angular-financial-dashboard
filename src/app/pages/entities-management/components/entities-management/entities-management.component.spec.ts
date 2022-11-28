import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesManagementComponent } from './entities-management.component';

describe('EntitiesManagementComponent', () => {
  let component: EntitiesManagementComponent;
  let fixture: ComponentFixture<EntitiesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitiesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
