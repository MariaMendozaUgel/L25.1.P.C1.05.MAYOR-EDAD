import Cl_personas from "./Cl_personas.js";
export default class Cl_grupo {
    constructor () {
        this.contPersonas = 0;
        this.contPersonasMay18 = 0;
    }
    procesarPersonas(p) {
        this.contPersonas++;
        if (p.edad >= 18) {
            this.contPersonasMay18++;
        }
    }
    PorcentajeMay18() {
        return (this.contPersonasMay18 / this.contPersonas) * 100;
        }
    }
