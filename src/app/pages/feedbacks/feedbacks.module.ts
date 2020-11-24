import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbacksPageRoutingModule } from './feedbacks-routing.module';

import { FeedbacksPage } from './feedbacks.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbacksPageRoutingModule
  ],
  declarations: [
    FeedbacksPage,
    HeaderComponent
  ]
})
export class FeedbacksPageModule {}
