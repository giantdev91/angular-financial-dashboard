import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRatioComponent } from './profile-ratio.component';

describe('ProfileRatioComponent', () => {
  let component: ProfileRatioComponent;
  let fixture: ComponentFixture<ProfileRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
