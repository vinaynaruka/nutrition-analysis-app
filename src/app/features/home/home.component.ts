import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingredientsText: string = `1 cup onion
  2 cup tomato
  3 tablespoon oil`;
  ingredientsArray: string[] = [];

  save() {
    console.log('saved = '+ this.ingredientsText);
    this.ingredientsArray = this.ingredientsText?.split(/\r\n|\n\r|\n|\r/).map(line => line.trim());
    console.log(this.ingredientsArray);
    this.ingredientsArray.forEach(line => console.log(line))
  }

  viewSummary() {
    this.router.navigateByUrl('summary')
  }

}
