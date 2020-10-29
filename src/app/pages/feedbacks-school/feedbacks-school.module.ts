import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbacksSchoolPageRoutingModule } from './feedbacks-school-routing.module';

import { FeedbacksSchoolPage } from './feedbacks-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbacksSchoolPageRoutingModule
  ],
  declarations: [FeedbacksSchoolPage]
})
export class FeedbacksSchoolPageModule {}
