export class Info{

    constructor(szuloelem){
        this.szuloelem=szuloelem
        this.counter=$(".szamlalo");
        this.szam=0
        this.szov();
    }
    szov(){
        var txt =``
     txt+=`<div class="szamlalo">
    
    
        ${this.szam} lépés történt eddig!
        
   
        </div>`
     txt+=""
        this.szuloelem.append(txt);
    }
    Setszov(szam){
        this.szuloelem.text(`${szam} lépés történt eddig!`)
        console.log("megtortent" ,szam)
    }

}