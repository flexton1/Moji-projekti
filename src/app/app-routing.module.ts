import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';

import { InfomationComponent } from './components/infomation/infomation.component';
import { PictureGalleryComponent } from './components/picture-gallery/picture-gallery.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { TablesComponent } from './components/tables/tables.component';




const routes: Routes = [
{path: 'home', component: PicturesComponent,  children: [
  {path:'', component: GooglemapsComponent},
  {path: '', outlet: 'pozadina', component: InfomationComponent},
  {path: '',outlet: 'futer', component: FooterComponent},
  {path: '', outlet: 'table1', component: TablesComponent}
]},

{path: 'galerija', component: PictureGalleryComponent, children:
[{path: '', outlet: 'futer2', component: FooterComponent}]},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


