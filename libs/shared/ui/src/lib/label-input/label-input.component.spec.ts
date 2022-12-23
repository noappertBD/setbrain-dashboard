import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInputComponent } from './label-input.component';

describe('AbelInputComponent', () => {
  let component: LabelInputComponent;
  let fixture: ComponentFixture<LabelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabelInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});