import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {AvatarComponent} from './components/header/avatar/avatar.component'
import {TitleComponent} from './components/header/title/title.component'
import {InformationComponent} from './components/header/information/information.component'

import {AcordeonComponent} from './components/acordeon/acordeon.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvatarComponent,
    TitleComponent,
    InformationComponent,
    AcordeonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
