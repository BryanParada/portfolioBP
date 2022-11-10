import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:'',
    children:
       [
          { path:'home', component: HomeComponent},
          { path:'about-me', component: AboutMeComponent},
          { path:'skills', component: SkillsComponent},
          { path:'services', component: ServicesComponent},
          { path:'portfolio', component: PortfolioComponent}, 
          { path:'contact', component: ContactComponent}, 
          { path:'**', redirectTo: 'home'},
       ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
