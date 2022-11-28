import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInformationComponent } from './entity-information.component';

describe('EntityInformationComponent', () => {
  let component: EntityInformationComponent;
  let fixture: ComponentFixture<EntityInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
