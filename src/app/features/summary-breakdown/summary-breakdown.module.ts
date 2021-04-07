import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryBreakdownComponent } from './summary-breakdown.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SummaryBreakdownComponent }
]

@NgModule({
  declarations: [SummaryBreakdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SummaryBreakdownModule { }
