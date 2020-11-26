import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackDetailPageRoutingModule } from './feedback-detail-routing.module';

import { FeedbackDetailPage } from './feedback-detail.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackDetailPageRoutingModule
  ],
  declarations: [
    FeedbackDetailPage,
    HeaderComponent
  ]
})
export class FeedbackDetailPageModule {}
