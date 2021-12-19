import { SharedModule } from './shared/shared.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { SitesModule } from './sites/sites.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakpointService } from './breakpoint.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SitesModule,
    AboutModule,
    ContactModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
