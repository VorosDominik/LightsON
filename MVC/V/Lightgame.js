export class Lightgame{
    #index
    katintahto;
    constructor(szuloelem,index,szin){
        
        this.szuloelem=szuloelem;
        this.#index=index
        this.SzinA=true
        this.szin=szin
        this.#htmlOszerak()
        this.elem = $(".elem:last-child")
        this.aktelem=this.elem.children()
        this.Pelem= this.elem.children("p")
        this.elem.on("click",()=>{
            
            
            if (this.SzinA){
                this.#sajatesemenykezelo("szinez")
                this.setSzin("Piros")
                this.SzinA=false;
                }else{
                    this.#sajatesemenykezelo("szinez")
                    this.setSzin("Kék")
                    this.SzinA=true
                }
         
        })
      
        
    }
 
   
    #sajatesemenykezelo(esemenynev){
        const esemenyem= new CustomEvent(esemenynev,{detail:this})
        window.dispatchEvent(esemenyem) 
    }
    
   
    setSzin(szin){
        this.elem.attr("class",`elem ${szin}`)
    
        }
   
    getindex(){
        return this.#index
    }
    
    #htmlOszerak(){
        let txt=""
        txt+=`<div class="elem ${this.szin}"><p></p>
        
   
        </div>`
     txt+=""
        this.szuloelem.append(txt);
    }
}