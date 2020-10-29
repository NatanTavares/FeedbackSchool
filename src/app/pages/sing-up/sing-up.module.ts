import { HeaderComponent } from './../../header/header.component';
import { InputComponent } from './../../input/input.component';
import { ButtonComponent } from './../../button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingUpPageRoutingModule } from './sing-up-routing.module';

import { SingUpPage } from './sing-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingUpPageRoutingModule
  ],
  declarations: [SingUpPage, InputComponent, HeaderComponent, ButtonComponent]
})
export class SingUpPageModule {}
