import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {AvatarComponent} from './components/header/avatar/avatar.component'
import {TitleComponent} from './components/header/title/title.component'
import {InformationComponent} from './components/header/information/information.component'

import { AccordeonCollectionComponent } from './components/accordeon-collection/accordeon-collection.component';
import { AccordeonComponent } from './components/accordeon-collection/accordeon/accordeon.component';
import { SkillsContentComponent } from './components/accordeon-collection/accordeon/skills-content/skills-content.component';
import { LanguagesContentComponent } from './components/accordeon-collection/accordeon/languages-content/languages-content.component';
import { PortfolioContentComponent } from './components/accordeon-collection/accordeon/portfolio-content/portfolio-content.component';
import { ExperiencesContentComponent } from './components/accordeon-collection/accordeon/experiences-content/experiences-content.component';
import { EducationContentComponent } from './components/accordeon-collection/accordeon/education-content/education-content.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvatarComponent,
    TitleComponent,
    InformationComponent,
    AccordeonCollectionComponent,
    AccordeonComponent,
    SkillsContentComponent,
    LanguagesContentComponent,
    PortfolioContentComponent,
    ExperiencesContentComponent,
    EducationContentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
