import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToboComponent } from './tobo.component';

describe('ToboComponent', () => {
  let component: ToboComponent;
  let fixture: ComponentFixture<ToboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
