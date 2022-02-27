import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: [ './pictures.component.css' ],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class PicturesComponent  {

 images = [
   { src: "assets/img/slika1.jpg"},
   {src: "assets/img/slika2.jpg"},
   {src: "assets/img/slika3.jpg"}
 ]

  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

}
  


