import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { NutritionDataService } from 'src/app/core/services/nutrition-data.service';

import { SummaryBreakdownComponent } from './summary-breakdown.component';

describe('SummaryBreakdownComponent', () => {
  let component: SummaryBreakdownComponent;
  let fixture: ComponentFixture<SummaryBreakdownComponent>;
  const mockNutritionDataService = {
    getNutritionDetails: jasmine.createSpy('getNutritionDetails').and.returnValue(of(null)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ SummaryBreakdownComponent ],
      providers: [
        {provide: NutritionDataService, useValue: mockNutritionDataService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
