import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { InfomationComponent } from './components/infomation/infomation.component';
import { FooterComponent } from './components/footer/footer.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
import { AppRoutingModule } from './app-routing.module';
import { PictureGalleryComponent } from './components/picture-gallery/picture-gallery.component';
import { TablesComponent } from './components/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PicturesComponent,
    InfomationComponent,
    FooterComponent,
    GooglemapsComponent,
    PictureGalleryComponent,
    TablesComponent, 
  ],
  imports: [
    BrowserModule,
        NgbModule,
        GoogleMapsModule,
        AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
