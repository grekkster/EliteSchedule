import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage } from '../pages';
/*
  Generated class for the TeamDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {
  // team property
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = navParams.data;
    console.log('**navParams: ', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

  goHome() {
    //this.navCtrl.push(MyTeamsPage);
    //this.navCtrl.popToRoot();
    console.log('**parent', this.navCtrl.parent);
    this.navCtrl.parent.parent.popToRoot();
      // prvni parent = tabs, druhy parent TeamHomePage
  }

}
