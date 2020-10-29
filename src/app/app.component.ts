import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Minhas Avaliaçoes',
      url: '/profile',
      icon: 'star'
    },
    {
      title: 'Se cadastrar',
      url: '/sing-up',
      icon: 'add-circle'
    },
    {
      title: 'Avaliações',
      url: '/feedbacks',
      icon: 'bar-chart'
    },
    {
      title: 'Avaliar',
      url: '/evaluate',
      icon: 'chatbubble'
    },
    {
      title: 'Cadastrar Instituição',
      url: '/register-school',
      icon: 'business'
    },
    {
      title: 'Suporte',
      url: '/folder/Spam',
      icon: 'bulb'
    },
    {
      title: 'Sair',
      url: '/folder/Spam',
      icon: 'close-circle'
    }
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
