import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankPageRoutingModule } from './rank-routing.module';

import { RankPage } from './rank.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ExitComponent } from 'src/app/components/exit/exit.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankPageRoutingModule
  ],
  declarations: [
    RankPage,
    HeaderComponent, 
    ExitComponent,
    MenuComponent
  ]
})
export class RankPageModule {}
