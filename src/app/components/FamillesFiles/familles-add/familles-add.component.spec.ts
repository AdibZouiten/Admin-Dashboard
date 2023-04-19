import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamillesAddComponent } from './familles-add.component';

describe('FamillesAddComponent', () => {
  let component: FamillesAddComponent;
  let fixture: ComponentFixture<FamillesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamillesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamillesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
