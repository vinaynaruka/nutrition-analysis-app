import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INutritionDetailsRequest, INutritionResponse } from 'src/app/core/models';
import { NutritionDataService } from 'src/app/core/services/nutrition-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  receipeData: INutritionDetailsRequest = {
    title: 'Fruit Salad',
    prep: '10 mins',
    yield: '10 servings',
    ingr: []
  }

  loading = false;

  constructor(private router: Router, public dataService: NutritionDataService ) { }

  ingredientsText: string = `1 pint strawberries - cleaned, hulled and sliced
  1 pound seedless grapes, halved
  3 kiwis, peeled and sliced
  3 bananas, sliced
  1 (21 ounce) can peach pie filling`;

  submitted = false;

  ngOnInit(): void {
  }

  save() {
    this.submitted = true;
    this.ingredientsText = this.ingredientsText?.trim();
    console.log('text = '+ this.ingredientsText);
    if (this.ingredientsText?.length) {
      this.receipeData.ingr = this.ingredientsText?.split(/\r\n|\n\r|\n|\r/).map(line => line.trim()) || [];
      this.loading = true;
      this.dataService.getNutritionDetails(this.receipeData).subscribe(data => {
        this.loading = false;
        console.log(data);
        this.submitted = false;
      },
      error => {
        this.loading = false;
        alert('Error occurred. Please try Again!');
      })
    }
  }

  viewSummary() {
    this.router.navigateByUrl('summary')
  }

}
