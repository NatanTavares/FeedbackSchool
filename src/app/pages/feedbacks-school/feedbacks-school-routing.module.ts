import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbacksSchoolPage } from './feedbacks-school.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbacksSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbacksSchoolPageRoutingModule {}
