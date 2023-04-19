import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamillesEditComponent } from './familles-edit.component';

describe('FamillesEditComponent', () => {
  let component: FamillesEditComponent;
  let fixture: ComponentFixture<FamillesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamillesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamillesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
