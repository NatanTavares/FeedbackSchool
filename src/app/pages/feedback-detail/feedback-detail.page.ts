import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Feedback } from 'src/app/models/feedback';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.page.html',
  styleUrls: ['./feedback-detail.page.scss'],
})
export class FeedbackDetailPage implements OnInit {
  public feedback: Feedback = {}
  private feedbackSubscription: Subscription
  private feedbackId: string = null

  constructor(
    private _menu: MenuController,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) { 
    this.feedbackId = this.activatedRoute.snapshot.params['id'];

    if (this.feedbackId) this.loadFeedback();
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.feedbackSubscription) this.feedbackSubscription.unsubscribe();
  }

  loadFeedback() {
    this.feedbackSubscription = this.crudService.getFeedback(this.feedbackId).subscribe(data => {
      this.feedback = data;
    });
  }



  async openMenu() {
    await this._menu.open();
  }

}
