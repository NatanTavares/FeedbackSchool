import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input('toggle') 
  toggle: string = 'off';

  constructor(private _menu: MenuController) { }

  openFirst() {
    this._menu.enable(true, 'first');
    this._menu.open('first');
  }

  openEnd() {
    this._menu.open('end');
  }

  openCustom() {
    this._menu.enable(true, 'custom');
    this._menu.open('custom');
  }

  ngOnInit() {}

}
