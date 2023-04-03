import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurNotFoundComponent } from './utilisateur-not-found.component';

describe('UtilisateurNotFoundComponent', () => {
  let component: UtilisateurNotFoundComponent;
  let fixture: ComponentFixture<UtilisateurNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
