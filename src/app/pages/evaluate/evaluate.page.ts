import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Feedback } from 'src/app/interfaces/feedback';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.page.html',
  styleUrls: ['./evaluate.page.scss'],
})
export class EvaluatePage implements OnInit {
  public userLogin: User = {}
  public feedback: Feedback = {}
  private loading: any
 

  constructor(
    private authService: AuthService,
    private menu: MenuController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private crudService: CrudService,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
  }


  logout() {
    this.authService.logout(this.userLogin);
  }

  async openMenu() {
    await this.menu.open();
  }

  async evaluate() {
    await this.presentLoading();

    try {
      await this.crudService.addFeedback(this.feedback);
      await this.loading.dismiss();

      this.navCtrl.navigateBack('/feedbacks');
    } catch (error) {
      this.presentToast('Erro ao tentar salvar');
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

}
