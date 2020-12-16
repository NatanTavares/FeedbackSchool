import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
  ) { }

    login(user: User){
     return this.afa.signInWithEmailAndPassword(user.email, user.password)
    }

    register(user:User){
      return this.afa.createUserWithEmailAndPassword(user.email, user.password)
    }

    logout(user: User){
      return this.afa.signOut()
    }

    enviarSenha(user: User){
      return this.afa.sendPasswordResetEmail(user.email)
    }

    




}
