import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluatePage } from './evaluate.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluatePageRoutingModule {}
