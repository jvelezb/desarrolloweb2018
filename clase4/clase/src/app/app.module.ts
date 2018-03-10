import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import {AlumnosService} from './service/alumnos.service';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
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
				path:'detalle/:matricula',
				component:DetalleComponent
			}
    	])
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }










