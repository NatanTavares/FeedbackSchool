import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluatePageRoutingModule } from './evaluate-routing.module';

import { EvaluatePage } from './evaluate.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluatePageRoutingModule
  ],
  declarations: [
    EvaluatePage,
    HeaderComponent
  ]
})
export class EvaluatePageModule {}
