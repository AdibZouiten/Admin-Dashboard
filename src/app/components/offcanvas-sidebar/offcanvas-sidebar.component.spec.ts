import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasSidebarComponent } from './offcanvas-sidebar.component';

describe('OffcanvasSidebarComponent', () => {
  let component: OffcanvasSidebarComponent;
  let fixture: ComponentFixture<OffcanvasSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
