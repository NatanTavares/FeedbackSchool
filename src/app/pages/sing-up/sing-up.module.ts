
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingUpPageRoutingModule } from './sing-up-routing.module';

import { SingUpPage } from './sing-up.page';
import { InputComponent } from 'src/app/components/input/input.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingUpPageRoutingModule
  ],
  declarations: [
    SingUpPage,
    InputComponent,
    HeaderComponent,
    ButtonComponent
  ]
})
export class SingUpPageModule {}
