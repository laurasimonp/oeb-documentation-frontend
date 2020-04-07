import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryDataComponent } from './repository-data.component';

describe('RepositoryDataComponent', () => {
  let component: RepositoryDataComponent;
  let fixture: ComponentFixture<RepositoryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
