import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurInfoComponent } from './utilisateur-info.component';

describe('UtilisateurInfoComponent', () => {
  let component: UtilisateurInfoComponent;
  let fixture: ComponentFixture<UtilisateurInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
