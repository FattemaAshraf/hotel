import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComponent } from './add-edit-ads.component';

describe('AddEditComponent', () => {
  let component: AddEditComponent;
  let fixture: ComponentFixture<AddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditComponent]
    });
    fixture = TestBed.createComponent(AddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
