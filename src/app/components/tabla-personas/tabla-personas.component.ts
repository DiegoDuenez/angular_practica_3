import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../Modelos/persona';
import { PERSONAS } from '../../Modelos/lista-personas';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css']
})
export class TablaPersonasComponent implements OnInit {

  
  personas = PERSONAS;
  selectedPersona!: Persona;
 

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){

   
  }


  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }
}
