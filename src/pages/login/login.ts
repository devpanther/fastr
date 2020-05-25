import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  pet: string = "login";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  openPage() {
    console.log("Second")
    this.navCtrl.setRoot(MainPage);
  }
}

