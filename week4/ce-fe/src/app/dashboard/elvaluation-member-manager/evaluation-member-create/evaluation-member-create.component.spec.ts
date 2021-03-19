import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationMemberCreateComponent } from './evaluation-member-create.component';

describe('EvaluationMemberCreateComponent', () => {
  let component: EvaluationMemberCreateComponent;
  let fixture: ComponentFixture<EvaluationMemberCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationMemberCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationMemberCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
