import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { Router, RouterModule, ROUTES, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import {SnackBarOverviewExample} from './snackbar/snack-bar-overview-example';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
]



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SnackBarOverviewExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{
      useHash: false
   }),
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [SnackBarOverviewExample],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // menuItems: any[];

  // constructor() { }

  // ngOnInit() {
  //   this.menuItems = routes.filter(menuItem => menuItem);
  // }


}
//export var routes;