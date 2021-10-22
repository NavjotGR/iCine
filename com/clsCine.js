class clsCine{
    constructor(){
        this.salas=[];
        this.CreateSalas();
        this.DrawSalas();
    }
//////////////////////////////////////////////////////
    CreateSalas(){
        /* this.salas=new clsSala("1", 10); */
        /* this.sala1.push(sala1); */

        /* this.sala2=new clsSala("2", 17) */
        /* this.sala2.push(sala2); */
        for (var i=1; i<3+1; i++){
            var tsala=new clsSala(i, 15);
            this.salas.push(tsala);
        }
    }
//////////////////////////////////////////////////////
    DrawSalas(){
        /* this.salas.DrawSalas(); */
        for (var i=0; i<3; i++){
            var tsala=this.salas[i];
            tsala.Draw();
        }
        /* this.sala1.Draw();
        this.sala2.Draw(); */

    }
//////////////////////////////////////////////////////
    /* EraseSalas(){
        this.containerHTML.innerHTML="";
    } */
}