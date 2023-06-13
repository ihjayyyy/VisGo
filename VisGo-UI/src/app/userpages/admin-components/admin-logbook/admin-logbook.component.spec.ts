import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogbookComponent } from './admin-logbook.component';

describe('AdminLogbookComponent', () => {
  let component: AdminLogbookComponent;
  let fixture: ComponentFixture<AdminLogbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLogbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
