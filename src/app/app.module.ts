import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { E2e3ExModule } from './e2e3ex/e2e3ex.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    E2e3ExModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
