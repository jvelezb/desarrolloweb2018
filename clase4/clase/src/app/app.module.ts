import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import {AlumnosService} from './service/alumnos.service';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ProfesorComponent } from './profesor/profesor.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    DetalleComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
			{
				path:'',
				redirectTo:'alumnos',
				pathMatch:'full'	
			},
			{
				path:'alumnos',
				component: AlumnosComponent,
			},
			{
				path:'cita/:barberia',
				component:DetalleComponent
			},
      {
        path:'profesor',
        component: ProfesorComponent
      }
    	])
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }










