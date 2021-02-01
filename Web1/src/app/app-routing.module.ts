import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button } from 'protractor';
import {AppComponent} from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { TagComponent } from './tag/tag.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [{
 path:'App',
 component:AppComponent
},
{
  path:'home',
 component:HomeComponent

},
{
 path:'tag',
 component:TagComponent
},
{
  path:'button',
  component:ButtonComponent
},{
  path:"icons",
  component:IconsComponent,
},
{
  path:"themes",
  component:ThemesComponent,
},
  {
    path:"breadcrumb",
    component:BreadcrumbComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
