import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNotesCardComponent } from './sticky-notes-card.component';

describe('StickyNotesCardComponent', () => {
  let component: StickyNotesCardComponent;
  let fixture: ComponentFixture<StickyNotesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyNotesCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StickyNotesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
