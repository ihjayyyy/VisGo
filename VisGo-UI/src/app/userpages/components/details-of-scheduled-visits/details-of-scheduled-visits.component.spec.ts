import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfScheduledVisitsComponent } from './details-of-scheduled-visits.component';

describe('DetailsOfScheduledVisitsComponent', () => {
  let component: DetailsOfScheduledVisitsComponent;
  let fixture: ComponentFixture<DetailsOfScheduledVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfScheduledVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfScheduledVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
