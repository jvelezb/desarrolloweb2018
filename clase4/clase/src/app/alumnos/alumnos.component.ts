import { Component, OnInit } from '@angular/core';
import {AlumnosService} from  '../service/alumnos.service';
import {Alumno}  from '../serviceObjects/alumno';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { FormControl } from '@angular/forms'; 

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


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
  busquedaControl = new FormControl();


	

  constructor(private alumnoService : AlumnosService,
    private router: Router) { 
  	this.director="Leopoldo";
  	this.escuela="CCM";

     this.modeloNombre = '';
     this.modeloCarrera = '';
     this.modeloMatricula ='';

  }

  ngOnInit() {
    this.busquedaControl.valueChanges
      .filter(text => text.length >= 3)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(value=>{
        console.log(value);
         this.alumnoService.obtenerAlumnos(value)
         .subscribe(data =>{
           this.alumnos = data.items;
         })
      });
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
