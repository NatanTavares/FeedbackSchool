import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSchoolPageRoutingModule } from './register-school-routing.module';

import { RegisterSchoolPage } from './register-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSchoolPageRoutingModule
  ],
  declarations: [RegisterSchoolPage]
})
export class RegisterSchoolPageModule {}
