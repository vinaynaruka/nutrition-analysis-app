import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { APP_ID, APP_KEY, BASE_URL, NUTRITION_DETAILS } from '../constants';
import { INutritionResponse } from '../models';
import { INutritionDetailsRequest } from '../models/nutrition-details-request-data';

@Injectable({
  providedIn: 'root'
})
export class NutritionDataService {

  nutritionData: INutritionResponse;
  constructor(private http: HttpClient) {}

  getNutritionDetails(reqData: INutritionDetailsRequest): Observable<any> {
    return this.http.post<any>(`${BASE_URL}${NUTRITION_DETAILS}?app_id=${APP_ID}&app_key=${APP_KEY}`, reqData).pipe(
      tap(data => this.nutritionData = data),
      catchError((err) => throwError(err))
    );
  }
}
