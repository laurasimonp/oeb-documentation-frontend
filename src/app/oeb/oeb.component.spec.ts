import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OebComponent } from './oeb.component';

describe('OebComponent', () => {
  let component: OebComponent;
  let fixture: ComponentFixture<OebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
