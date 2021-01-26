import { NumberFormatStyle } from "@angular/common";

export class Persona {

    public id: number;
    public nombre: string;
    public apellidos: string;
    public edad:number;
    public ciudad_actual: string;
    public universidad: string;
    public carrera: string;

    constructor(id: number, nombre: string, apellidos: string, edad: number, ciudad_actual: string, universidad: string, carrera: string){

        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.ciudad_actual = ciudad_actual;
        this.universidad = universidad;
        this.carrera = carrera;

    }

}
