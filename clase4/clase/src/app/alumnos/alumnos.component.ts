import { Component, OnInit } from '@angular/core';

export class Alumno{
		nombre: String;
		matricula : String;
		carrera: String;
}

@Component({
  selector: 'app-alumnos-tec',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {


  modeloNombre: String;
  modeloCarrera: String;
  modeloMatricula: String ='';
	director: String;
	escuela: String;
	alumnos: Alumno[];

	

  constructor() { 
  	this.director="Leopoldo";
  	this.escuela="CCM";

  	let alumno1 :  Alumno ={
	  	nombre: "Juan Velez",
			matricula : "123123",
			carrera: "ITC"
  	};
  	this.alumnos = [alumno1];
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















}
