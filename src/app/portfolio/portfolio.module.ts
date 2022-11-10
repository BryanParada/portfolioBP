import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    BackToTopComponent,
    ContactComponent,
    FooterComponent, 
    HomeComponent,
    PortfolioComponent,
    QualificationComponent,
    ServicesComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
