import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NutritionDataService } from './nutrition-data.service';

describe('NutritionDataService', () => {
  let service: NutritionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(NutritionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
