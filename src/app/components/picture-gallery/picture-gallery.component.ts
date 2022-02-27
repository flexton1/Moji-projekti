import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.css']
})
export class PictureGalleryComponent implements OnInit {

  images!: any[];    
  filterBy?: string = 'all'    
 allImages:any[] = [];    
    
  constructor(private imagesService: ImagesService) {    
    this.allImages = this.imagesService.getImages();    
  }    
  ngOnChanges() {    
    this.allImages = this.imagesService.getImages();    
  }    

  ngOnInit(): void {
  }

}
