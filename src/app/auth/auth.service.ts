import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/storage';

export class AuthService {
  token: string;

  constructor() {

  }

  singupUser(email: string, passsword: string) {
    firebase.auth().createUserWithEmailAndPassword(email, passsword)
      .catch(
        error => console.log(error)
      )
  }

  singinUser(email: string, passsword: string) {
    firebase.auth().signInWithEmailAndPassword(email, passsword)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log('error', error)
      )
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }


}