import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IonInfiniteScroll, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Feedback } from 'src/app/models/feedback';
import { CrudService } from 'src/app/services/crud.service';
import _ from 'lodash'


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.page.html',
  styleUrls: ['./feedbacks.page.scss'],
})
export class FeedbacksPage implements OnInit {
  private feedbacks = new Array<Feedback>();
  private feedbacksSubscription: Subscription;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  allfeeds: any;
  queryText: string




  constructor(
    private menu: MenuController,
    private crudService: CrudService,
    private afs: AngularFirestore
  ) {
    this.queryText = ''
    this.feedbacksSubscription = this.crudService.getFeedbacks().subscribe(data => {
      this.feedbacks = data
      this.allfeeds = this.feedbacks
      
    });

    
  }

  ngOnInit() {
  }


  ngOnDestroy() {
    this.feedbacksSubscription.unsubscribe();
  }

  async openMenu() {
    await this.menu.open();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.feedbacks.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  filter(cid: any){
    let val = cid.target.value
    if(val && val.trim() != ''){
      this.feedbacks = _.values(this.allfeeds)
      this.feedbacks = this.feedbacks.filter((feedback)=>{
        return(feedback.nomeInstituicao.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    } else{
      this.feedbacks = this.allfeeds
    }
  }
 




  }
