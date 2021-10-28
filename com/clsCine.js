class clsCine{
    constructor(){
        this.salas=[];
        this.CreateSalas();
        this.DrawSalas();
    }
//////////////////////////////////////////////////////////////////////////////////////
    CreateSalas(){
        /* this.salas=new clsSala("1", 10); */
        /* this.sala1.push(sala1); */

        /* this.sala2=new clsSala("2", 17) */
        /* this.sala2.push(sala2); */
        for (var i=1; i<3+1; i++){
            var sala1=new clsSala(i++, 14);
            var sala2=new clsSala(i++, 6);
            var sala3=new clsSala(i++, 25);
            this.salas.push(sala1,sala2,sala3);
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
    DrawSalas(){
        /* this.salas.DrawSalas(); */
        for (var i=0; i<3; i++){
            var tsala=this.salas[i];
            tsala.Draw();
        }
        /* this.sala1.Draw();
        this.sala2.Draw(); */
    }
//////////////////////////////////////////////////////////////////////////////////////
    /* EraseSalas(){
        this.containerHTML.innerHTML="";
    } */
}