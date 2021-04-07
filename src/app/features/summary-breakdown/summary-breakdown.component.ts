import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-breakdown',
  templateUrl: './summary-breakdown.component.html',
  styleUrls: ['./summary-breakdown.component.scss']
})
export class SummaryBreakdownComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToHome() {
    this.router.navigateByUrl('home');
  }

}
