import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-incompatible',
  templateUrl: './incompatible.page.html',
  styleUrls: ['./incompatible.page.scss'],
})
export class IncompatiblePage implements OnInit {

  constructor( private navCtrl: NavController ) { }
    
  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateForward("/information");
    }, 7000);
  }
  onClick() {
    this.navCtrl.navigateForward("/information");
  }

}

