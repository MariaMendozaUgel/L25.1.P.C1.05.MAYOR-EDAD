import Cl_grupo from "./Cl_grupo.js";
import Cl_personas from "./Cl_personas.js";

let persona1 = new Cl_personas("Luis", 15);
let persona2 = new Cl_personas("Ana", 19);
let persona3 = new Cl_personas("Jose", 21);
let persona5 = new Cl_personas("Carmen", 17);
let persona4 = new Cl_personas("Rosa", 18);
let persona6 = new Cl_personas("Jose", 22);
let persona7 = new Cl_personas("Maria", 17);
let persona8 = new Cl_personas("Luz", 19);
let persona9 = new Cl_personas("Rafael", 23);
let persona10 = new Cl_personas("Liz", 15);
let persona11 = new Cl_personas("Marcos", 20);
let persona12 = new Cl_personas("Leo", 16);

let grupo = new Cl_grupo();
grupo.procesarPersonas(persona1);
grupo.procesarPersonas(persona2);
grupo.procesarPersonas(persona3);
grupo.procesarPersonas(persona4);
grupo.procesarPersonas(persona5);
grupo.procesarPersonas(persona6);
grupo.procesarPersonas(persona7);
grupo.procesarPersonas(persona8);
grupo.procesarPersonas(persona9);
grupo.procesarPersonas(persona10);
grupo.procesarPersonas(persona11);
grupo.procesarPersonas(persona12);

alert("El porcentaje de personas mayores de 18 es: " + grupo.PorcentajeMay18());