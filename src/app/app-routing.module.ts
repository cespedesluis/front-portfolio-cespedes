import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


const routes: Routes = [
   { path: '', component: AppComponent, pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const appRoutes = [
  { path: '', component: AppComponent, pathMatch: "full" },
 
 
];
export const routing = RouterModule.forRoot(appRoutes);