import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamillesInfoComponent } from './familles-info.component';

describe('FamillesInfoComponent', () => {
  let component: FamillesInfoComponent;
  let fixture: ComponentFixture<FamillesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamillesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamillesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
