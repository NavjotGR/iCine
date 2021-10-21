class clsCine{
    constructor(){
        this.salas=[];
        this.CreateSalas();
        this.DrawSalas();
    }
//////////////////////////////////////////////////////
    CreateSalas(){
            this.sala1=new clsSala("2", 10);
            /* this.sala1.push(sala1); */

            this.sala2=new clsSala("3", 7)
            /* this.sala2.push(sala2); */
    }
//////////////////////////////////////////////////////
    DrawSalas(){
        /* this.salas.DrawSalas();
        for (var i=0; i<2; i++){
            var tA=this.salas[i];
            var sala=tA.Draw();
        } */
        this.sala1.Draw();
        this.sala2.Draw();

    }
//////////////////////////////////////////////////////
    /* EraseSalas(){
        this.containerHTML.innerHTML="";
    } */
}