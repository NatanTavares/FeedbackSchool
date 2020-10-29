import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSchoolPage } from './register-school.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSchoolPageRoutingModule {}
