import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousfamillesComponent } from './sousfamilles.component';

describe('SousfamillesComponent', () => {
  let component: SousfamillesComponent;
  let fixture: ComponentFixture<SousfamillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousfamillesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousfamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
