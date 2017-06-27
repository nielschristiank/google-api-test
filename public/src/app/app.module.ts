import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, BrowserXhr } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';

import { PlaceService } from './place.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    JsonpModule
  ],
  providers: [PlaceService, BrowserXhr, CustExtBrowserXhr],
  bootstrap: [AppComponent]
})
export class AppModule { }
