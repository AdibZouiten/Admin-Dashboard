import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousFamilleEditComponent } from './sous-famille-edit.component';

describe('SousFamilleEditComponent', () => {
  let component: SousFamilleEditComponent;
  let fixture: ComponentFixture<SousFamilleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousFamilleEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousFamilleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
