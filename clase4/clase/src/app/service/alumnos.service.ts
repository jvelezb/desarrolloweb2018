import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Alumno} from '../serviceObjects/alumno';
import 'rxjs/add/operator/map';

@Injectable()
export class AlumnosService {



  constructor(private _http:Http) { }

  obtenerAlumnos(_stringBusqueda){
  		return 	 this._http.get("https://api.github.com/search/users?q="+_stringBusqueda).map(resultado => resultado.json());

  	
  }

  detalleAlumno(matricula):Alumno{
  	
  	return new Alumno{
  		matricula = matricula
  	};
  }








}
