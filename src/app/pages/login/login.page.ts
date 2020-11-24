import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {}
  private loading: any;
 

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    
  }


  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
      this.router.navigate(['evaluate'])
      
    } catch (error) {
      console.error(error)
      let message: string

      switch (error.code) {
        case 'auth/wrong-password':
          message = 'Senha errada!!'
          break;
        case 'auth/invalid-email':
          message = 'E-mail inválido!'
          break;
        case 'auth/argument-error':
          message = 'Algum campo vazio!'
          break;
        case 'auth/user-not-found':
          message = 'E-mail não encontrado ou incorreto !'
          break;
      }

      this.presentToast(message);
     
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  enviarSenha(){
    if(this.userLogin.email == null){
      this.presentToast("Insira o e-mail de login no campo");
      this.loading.dismiss();
    }
    this.authService.enviarSenha(this.userLogin)
    this.presentToast("Link para resetar senha enviado para e-mail");
    this.loading.dismiss();
  }


}
