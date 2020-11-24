import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import { Feedback } from '../interfaces/feedback';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private feedbacksCollection: AngularFirestoreCollection<Feedback>;
 
  constructor(
    private afs: AngularFirestore, ) {
    this.feedbacksCollection = this.afs.collection<Feedback>('Feedbacks') 
  }

  getFeedbacks(){
    return  this.feedbacksCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, ...data};
        })
      })
    )
  }

  addFeedback(feedback: Feedback){
    return this.feedbacksCollection.add(feedback);
  }

  getFeedback(id: string){
    return this.feedbacksCollection.doc<Feedback>(id).valueChanges()
  }


















}
