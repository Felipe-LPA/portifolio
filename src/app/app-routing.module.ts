import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitesComponent } from './sites/sites.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', redirectTo:'/sites', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo:'/sites' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
