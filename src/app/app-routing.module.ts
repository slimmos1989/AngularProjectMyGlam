import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {Section1Component} from './section1/section1.component';
import {Section2Component} from './section2/section2.component';
import {Section3Component} from './section3/section3.component';
import {Section4Component} from './section4/section4.component';
import {Section5Component} from './section5/section5.component';


const routes: Routes = [
                        {path:'', component:NavbarComponent},
                        {path:'',component: Section1Component, outlet:'secondary1'},
                        {path:'',component: Section2Component, outlet:'secondary2'},
                        {path:'',component: Section3Component, outlet:'secondary3'},
                        {path:'',component: Section4Component, outlet:'secondary4'},
                        {path:'',component: Section5Component, outlet:'secondary5'},
                        {path:'login', component: LoginComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]