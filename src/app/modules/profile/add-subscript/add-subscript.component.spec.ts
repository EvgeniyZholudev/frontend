import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubscriptComponent } from './add-subscript.component';

describe('AddSubscriptComponent', () => {
  let component: AddSubscriptComponent;
  let fixture: ComponentFixture<AddSubscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
