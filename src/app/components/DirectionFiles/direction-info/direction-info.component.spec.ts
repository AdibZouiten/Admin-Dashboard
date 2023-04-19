import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionInfoComponent } from './direction-info.component';

describe('DirectionInfoComponent', () => {
  let component: DirectionInfoComponent;
  let fixture: ComponentFixture<DirectionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
