import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteUserComponent } from './admin-delete-user.component';

describe('AdminDeleteUserComponent', () => {
  let component: AdminDeleteUserComponent;
  let fixture: ComponentFixture<AdminDeleteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeleteUserComponent]
    });
    fixture = TestBed.createComponent(AdminDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
