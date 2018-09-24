import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountComponent } from './channel-account.component';

describe('ChannelAccountComponent', () => {
  let component: ChannelAccountComponent;
  let fixture: ComponentFixture<ChannelAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
