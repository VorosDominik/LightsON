export class Modell {
    #lista = [];
    #id;
    #allapot;
    #lepesszam;

    constructor() {
        this.#allapot = "x";
        this.#lepesszam = 0;
        this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    }

    setallapot(index) {
        
        if (this.#allapot === "Piros") {
      
            this.#allapot = "Kék";
            this.#lista[i]=this.#allapot
        } else {
            this.#allapot = "Piros";
            this.#lista[i]=this.#allapot
        }
       
    }
    getErtek() {
        return this.#allapot;
      }
    getlist(){
        return this.#lista
    };
    
   
     }