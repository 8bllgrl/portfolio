import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactspageComponent } from './contactspage/contactspage.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'gallery', component: GallerypageComponent },
  { path: 'contact', component: ContactspageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
