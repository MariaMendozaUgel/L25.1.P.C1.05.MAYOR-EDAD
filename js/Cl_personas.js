export default class Cl_personas {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    get Nombre()  {
        return this.nombre;
    }
    set Edad(edad) {
        this.edad = edad;
    }
    get Edad()  {
        return this.edad;
    }
}