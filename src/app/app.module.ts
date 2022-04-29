import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';
import { PortfolioService } from './servicios/portfolio.service';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    CursosComponent,
    PortfolioComponent,
    ConocimientosComponent,
    LoginComponent,
    PiepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({})
 
  
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
