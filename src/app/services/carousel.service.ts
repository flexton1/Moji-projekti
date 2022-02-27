import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  public slides = [
    { src:"assets/img/slika1.jpg" },
    { src: "assets/img/slika2.jpg" },
    { src: "assets/img/slika3.jpg" }
    ];


  constructor() { }
}
