import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { HomeComponent } from './home/home.component';
import { SpecificityComponent } from './specificity/specificity.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxModelComponent,
    HomeComponent,
    SpecificityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
