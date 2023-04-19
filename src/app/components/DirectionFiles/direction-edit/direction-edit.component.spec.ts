import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionEditComponent } from './direction-edit.component';

describe('DirectionEditComponent', () => {
  let component: DirectionEditComponent;
  let fixture: ComponentFixture<DirectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
