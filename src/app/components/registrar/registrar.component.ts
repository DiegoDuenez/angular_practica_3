import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PERSONAS } from '../../Modelos/lista-personas';
import { Persona } from '../../Modelos/persona';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  personas = PERSONAS;
  id: any;
  nombre: any;
  ap: any;
  edad: any;
  ciudad: any;
  uni: any;
  carrera: any;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.nombre = this.route.snapshot.params['nombre'];
    this.ap = this.route.snapshot.params['ap'];
    this.edad = this.route.snapshot.params['edad'];
    this.ciudad = this.route.snapshot.params['ciu'];
    this.uni = this.route.snapshot.params['uni'];
    this.carrera = this.route.snapshot.params['car'];
    if(this.id && this.nombre && this.ap && this.edad && this.ciudad && this.uni && this.carrera){ 
      this.personas.push(new Persona(this.id, this.nombre, this.ap, this.edad, this.ciudad, this.uni, this.carrera));
  
    }
    else{
      console.log("LOS CAMPOS DEL URL registrar/ SON NULOS")
    }
    
  }

  agregarUsuario(id: number, nombre: string, ap: string, edad: number, ciudad: string, uni: string, carrera: string){
    
    console.log(PERSONAS)
  }

}
