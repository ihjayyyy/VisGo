import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewUserComponent } from './admin-new-user.component';

describe('AdminNewUserComponent', () => {
  let component: AdminNewUserComponent;
  let fixture: ComponentFixture<AdminNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
