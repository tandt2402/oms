import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelMgmtComponent } from './label-mgmt.component';

describe('LabelMgmtComponent', () => {
  let component: LabelMgmtComponent;
  let fixture: ComponentFixture<LabelMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
