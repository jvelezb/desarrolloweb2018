import { Component, OnInit } from '@angular/core';
import {AlumnosService} from  '../service/alumnos.service';
import {Alumno}  from '../serviceObjects/alumno';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-alumnos-tec',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  providers:[AlumnosService]
})

export class AlumnosComponent implements OnInit {


  modeloNombre: String;
  modeloCarrera: String;
  modeloMatricula: String ='';
  modeloBusquedaNombre:String = '';
	director: String;
	escuela: String;
	alumnos: Alumno[];

	

  constructor(private alumnoService : AlumnosService,
    private router: Router) { 
  	this.director="Leopoldo";
  	this.escuela="CCM";

  	 this.alumnos = alumnoService.obtenerAlumnos(this.modeloBusquedaNombre);
     this.modeloNombre = '';
     this.modeloCarrera = '';
     this.modeloMatricula ='';

  }

  ngOnInit() {
  }

  crearAlumno(){
  	let nuevoAlumno: Alumno ={
  		nombre: this.modeloNombre,
  		matricula : this.modeloMatricula,
  		carrera: this.modeloCarrera
  	};
  	this.alumnos.push(nuevoAlumno);
    this.modeloNombre = '';
    this.modeloMatricula ='';
    this.modeloCarrera = '';
  }
  detalle (matricula){
     this.router.navigate(['detalle',matricula]);
  }















}
