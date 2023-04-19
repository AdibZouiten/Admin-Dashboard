import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousFamilleInfoComponent } from './sous-famille-info.component';

describe('SousFamilleInfoComponent', () => {
  let component: SousFamilleInfoComponent;
  let fixture: ComponentFixture<SousFamilleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousFamilleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousFamilleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
