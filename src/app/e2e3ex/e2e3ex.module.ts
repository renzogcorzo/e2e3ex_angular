import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { E2e3exComponent } from './components/e2e3ex/e2e3ex.component';

import { HttpClientModule } from '@angular/common/http';
import { ExtableComponent } from './components/extable/extable.component';


@NgModule({
  declarations: [
    E2e3exComponent,
    ExtableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],

  exports: [E2e3exComponent, ExtableComponent]
})
export class E2e3ExModule { }
