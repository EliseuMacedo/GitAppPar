import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  private cont = 0;
  
  @ViewChild('mySlider') mySlide: any;

    imagens = [
              {
                'img': 'assets/img/match1.jpg'
              },
              {
                'img': 'assets/img/match2.jpg'
              },
              {
                'img': 'assets/img/match3.jpg'
              },
              {
                'img': 'assets/img/match4.jpg'
              },
              {
                'img': 'assets/img/match5.jpg'
              }
    ];

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  

  slideNext(){

    this.cont = this.cont + 1;

    this.mySlide.slideNext();

    if(this.cont == 5) {
      this.navCtrl.navigateForward("/incompatible");
    }
  }
}
