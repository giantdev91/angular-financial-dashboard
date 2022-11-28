import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLeftSideBarComponent } from './back-left-side-bar.component';

describe('BackLeftSideBarComponent', () => {
  let component: BackLeftSideBarComponent;
  let fixture: ComponentFixture<BackLeftSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackLeftSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
