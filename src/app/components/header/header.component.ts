import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private menu: MenuController
  ) { }

  @Input('title')
  title: string;

  ngOnInit() {}

  async openMenu() {
    await this.menu.open();
  }
}
