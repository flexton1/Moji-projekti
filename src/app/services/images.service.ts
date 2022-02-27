import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  allImages: any[] = [];    
    
    getImages() {    
        return this.allImages = this.Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return this.Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }  
    public Imagesdelatils =  [
      { "id": 1, "url": "assets/image-gallery/image (1).jpg" },
      { "id": 2, "url": "assets/image-gallery/image (2).jpg" },
      { "id": 3, "url": "assets/image-gallery/image (3).jpg" },
      { "id": 4, "url": "assets/image-gallery/image (4).jpg" },
      { "id": 5, "url": "assets/image-gallery/image (5).jpg" },
      { "id": 6, "url": "assets/image-gallery/image (6).jpg" },
      { "id": 7, "url": "assets/image-gallery/image (7).jpg" },
      { "id": 8, "url": "assets/image-gallery/image (8).jpg" },
      { "id": 9, "url": "assets/image-gallery/image (9).jpg" },
      { "id": 10, "url": "assets/image-gallery/image (10).jpg" },
      { "id": 11, "url": "assets/image-gallery/image (11).jpg" },
      { "id": 12, "url": "assets/image-gallery/image (12).jpg" }
    ];

  constructor() {}
}
