import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NutritionDataService } from './nutrition-data.service';
import { INutritionDetailsRequest, INutritionResponse } from '../models';
import { BASE_URL, NUTRITION_DETAILS, APP_ID, APP_KEY } from '../constants';

describe('NutritionDataService', () => {
  let service: NutritionDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(NutritionDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<INutritionResponse>', () => {
    service.getNutritionDetails(mockRequestData).subscribe((res) => {
      expect(res).toEqual(mockData);
    });

    const url = `${BASE_URL}${NUTRITION_DETAILS}?app_id=${APP_ID}&app_key=${APP_KEY}`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush(mockData);
  });
});

const mockRequestData: INutritionDetailsRequest = {
	"title": "Fruit Salad",
	"prep": "10 mins",
	"yield": "10 servings",
	"ingr": [
		"1 pint strawberries - cleaned, hulled and sliced",
		"1 pound seedless grapes, halved",
		"3 kiwis, peeled and sliced",
		"3 bananas, sliced",
		"1 (21 ounce) can peach pie filling"
	]
}

const mockData: INutritionResponse = {
	"uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_86c70b8bc68645af9dcf91262e62dd55",
	"yield": 10.0,
	"calories": 1457,
	"totalWeight": 1960.0323556250003,
	"dietLabels": [
		"LOW_FAT",
		"LOW_SODIUM"
	],
	"healthLabels": [
		"FAT_FREE",
		"LOW_FAT_ABS",
		"VEGETARIAN",
	],
	"cautions": [
		"SULFITES"
	],
	"totalNutrients": {
		"ENERC_KCAL": {
			"label": "Energy",
			"quantity": 1457.747720925,
			"unit": "kcal"
		}
	},
	"totalDaily": {
		"ENERC_KCAL": {
			"label": "Energy",
			"quantity": 72.88738604625,
			"unit": "%"
		}
	},
	"totalNutrientsKCal": {
		"ENERC_KCAL": {
			"label": "Energy",
			"quantity": 1457,
			"unit": "kcal"
		}
	}
}
