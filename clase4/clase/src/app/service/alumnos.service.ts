import { Injectable } from '@angular/core';

import {Alumno} from '../serviceObjects/alumno'


@Injectable()
export class AlumnosService {

 grupo: Alumno[] = [	
	 {nombre: "Juan",
			matricula :"A94343",
			carrera: "ITC",
		},
		{nombre: "Pedro",
			matricula :"A6453825",
			carrera: "ITC",
		},
			{nombre: "Alvaro",
		matricula :"787657876567",
		carrera: "LIN",
		}
 ];


  constructor() { }

  obtenerAlumnos():Alumno[]{
  		return this.grupo;
  }

  detalleAlumno(matricula):Alumno{
  	for (var i =0; i<this.grupo.length; i++){
  		if(this.grupo[i].matricula=== matricula){
  				return this.grupo[i];
  		}
  	}
  	return null;
  }













}
