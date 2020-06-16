import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIsComponent } from './apis.component';

describe('APIsComponent', () => {
  let component: APIsComponent;
  let fixture: ComponentFixture<APIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
