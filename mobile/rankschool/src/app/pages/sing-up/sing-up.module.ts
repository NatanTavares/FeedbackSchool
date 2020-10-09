import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingUpPageRoutingModule } from './sing-up-routing.module';

import { SingUpPage } from './sing-up.page';

import { HeaderComponent } from '../../components/header/header.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ExitComponent } from 'src/app/components/exit/exit.component';

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
    ButtonComponent,
    ExitComponent
  ]
})
export class SingUpPageModule {}
