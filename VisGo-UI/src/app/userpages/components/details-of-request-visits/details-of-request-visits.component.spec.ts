import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfRequestVisitsComponent } from './details-of-request-visits.component';

describe('DetailsOfRequestVisitsComponent', () => {
  let component: DetailsOfRequestVisitsComponent;
  let fixture: ComponentFixture<DetailsOfRequestVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfRequestVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfRequestVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
