import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteTaskComponent } from './add-delete-task.component';

describe('AddDeleteTaskComponent', () => {
  let component: AddDeleteTaskComponent;
  let fixture: ComponentFixture<AddDeleteTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeleteTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
