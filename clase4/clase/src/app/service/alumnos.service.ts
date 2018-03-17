import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Alumno} from '../serviceObjects/alumno';
import 'rx/add/operator/map';

@Injectable()
export class AlumnosService {



  constructor(private _http:Http) { }

  obtenerAlumnos(_stringBusqueda):Alumno[]{
  		let lista = this._http.get("https://api.github.com/search/users?q="+_stringBusqueda) as Object;
  		console.log(lista);

  		return [];
  }

  detalleAlumno(matricula):Alumno{
  	
  	return null;
  }













}
