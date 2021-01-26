import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../Modelos/persona';
import { PERSONAS } from '../../Modelos/lista-personas';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostrarTablaPersonas: Boolean = false;

  personas = PERSONAS;

  constructor() { }

  ngOnInit(): void {
  }

}
