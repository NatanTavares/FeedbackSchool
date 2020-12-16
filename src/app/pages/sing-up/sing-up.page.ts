import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {
  public userRegister: User = {}
  private loading: any;
  private confirmPassword;

  constructor(
    private _menu: MenuController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }


  async register() {
    await this.presentLoading();

    if(this.userRegister.password == this.confirmPassword) {
      try {
        await this.authService.register(this.userRegister);
        this.router.navigate(['/evaluate'])
  
      } catch (error) {
        console.error(error)
        let message: string
  
        switch (error.code) {
          case 'auth/email-already-in-use':
            message = 'E-mail já sendo usado!'
            break;
          case 'auth/invalid-email':
            message = 'E-mail inválido!'
            break;
          case 'auth/argument-error':
            message = 'Algum campo vazio!'
            break;
          case 'auth/weak-password':
            message = 'Senha fraca!'
            break;
        }
  
        this.presentToast(message);
      } finally {
        this.loading.dismiss();
      }

    } else{
      this.presentToast('As senhas não conferem!!');
      this.loading.dismiss();
    }
   
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  async openMenu() {
    await this._menu.open();
  }
}
