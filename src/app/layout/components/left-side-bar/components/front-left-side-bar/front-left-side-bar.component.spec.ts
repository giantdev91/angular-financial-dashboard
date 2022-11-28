import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLeftSideBarComponent } from './front-left-side-bar.component';

describe('FrontLeftSideBarComponent', () => {
  let component: FrontLeftSideBarComponent;
  let fixture: ComponentFixture<FrontLeftSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontLeftSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
