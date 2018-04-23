import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPickerComponent } from './class-picker.component';

describe('ClassPickerComponent', () => {
  let component: ClassPickerComponent;
  let fixture: ComponentFixture<ClassPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
