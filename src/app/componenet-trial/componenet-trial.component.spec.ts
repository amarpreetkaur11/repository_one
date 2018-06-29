import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetTrialComponent } from './componenet-trial.component';

describe('ComponenetTrialComponent', () => {
  let component: ComponenetTrialComponent;
  let fixture: ComponentFixture<ComponenetTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenetTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenetTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
