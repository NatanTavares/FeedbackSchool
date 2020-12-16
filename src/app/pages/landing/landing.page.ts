import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Feedback } from 'src/app/models/feedback';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  private feedbacks = new Array<Feedback>();
  private feedbacksSubscription: Subscription;

  constructor(
    private _menu: MenuController,
    private crudService: CrudService
  ) { this.feedbacksSubscription = this.crudService.getFeedbacks().subscribe(data =>{
      this.feedbacks = data
  });
  }

  ngOnInit() {
    
  }

}
