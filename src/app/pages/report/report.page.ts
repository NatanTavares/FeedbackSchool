import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  async openMenu() {
    await this.menu.open();
  }


}
