import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	users: Observable<any>;
  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {
  	this.users = db.list('/users').valueChanges();
  }

}
