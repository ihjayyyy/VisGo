import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfVisitsComponent } from './details-of-visits.component';

describe('DetailsOfVisitsComponent', () => {
  let component: DetailsOfVisitsComponent;
  let fixture: ComponentFixture<DetailsOfVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
