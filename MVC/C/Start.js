import { Modell } from "../M/Modell.js";
import { Lightgame } from "../V/Lightgame.js";
import { Info } from "../V/Info.js";
export class Start {
    
    #elemLista=[]
    constructor() {
       
        this.info= new Info($("#allapot")) 
        this.counter=0
        this.MoDELL = new Modell();
        for (let index = 0; index < 9; index++) {
            this.Divelem = new Lightgame($("#GAME"),index,"Kék");
            
        }
       
        
      
         

        // Az eseménykezelőt kívül, a konstruktoron kívül definiáljuk
       
       
     
       
        
            $(window).on("szinez", (event) => {
               
                
           
                this.counter++
                console.log(this.counter)
                this.info.Setszov(this.counter)
                
                
     })}
                
                
              
    
              
                
          
            
            
       
    
};
