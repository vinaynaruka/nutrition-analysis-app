import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionDataService } from 'src/app/core/services/nutrition-data.service';

@Component({
  selector: 'app-summary-breakdown',
  templateUrl: './summary-breakdown.component.html',
  styleUrls: ['./summary-breakdown.component.scss']
})
export class SummaryBreakdownComponent implements OnInit {

  constructor(private router: Router, public dataService: NutritionDataService) { }

  ngOnInit(): void {
    console.log(this.dataService.nutritionData);
  }

  backToHome() {
    this.router.navigateByUrl('home');
  }

}
