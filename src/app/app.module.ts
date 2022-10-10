import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { HysComponent } from './components/hys/hys.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PresentationComponent,
    ExperienciasComponent,
    AddButtonComponent,
    ExperienciaComponent,
    EducacionComponent,
    EstudioComponent,
    HysComponent,
    ProgressbarComponent,
    ProyectosComponent,
    ProyectoComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
