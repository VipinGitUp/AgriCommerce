import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
 
//   exports: [RouterModule]
imports: [BrowserModule, RouterModule.forRoot(routes)],
declarations: [AppComponent, HomeComponent],
bootstrap: [AppComponent],

})
export class AppRoutingModule { }
