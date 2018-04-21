import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AlumnosService} from '../service/alumnos.service';
import {Alumno} from '../serviceObjects/alumno';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

	cualquiercosa: String;
	alumno : Alumno;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private service: AlumnosService) { }

  ngOnInit() {
  	this.cualquiercosa = this.route.snapshot.paramMap.get('barberia');
    console.log(this.cualquiercosa);
  	this.alumno = this.service.detalleAlumno(this.matricula);
  }

}










