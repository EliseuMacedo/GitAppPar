import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-match-female',
  templateUrl: './match-female.page.html',
  styleUrls: ['./match-female.page.scss'],
})
export class MatchFemalePage implements OnInit {

  private cont = 0;

  @ViewChild('mySlider') mySlide: any;

    imagens = [
              {
                "img": "assets/img/match6.jpg"
              },
              {   
                "img": "assets/img/match7.jpg"
              },
              {
                "img": "assets/img/match8.jpg"
              },
              {
                "img": "assets/img/match9.jpg"
              },
              {
                "img": "assets/img/match10.jpg"
              }
    ];

  constructor( private navCtrl: NavController ) {
    
   }

  ngOnInit() {
  }

  slideNext(){



    this.cont = this.cont +1;
    
    this.mySlide.slideNext();

    if(this.cont == 5){
      this.navCtrl.navigateForward("/incompatible"); 
    }
  }
}
