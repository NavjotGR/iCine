class clsSala{
    constructor(pID, pNumerodeasientos){
        this.number=pID;
        this.num_asientos=pNumerodeasientos;
        this.asientos=[];
        this.containerHTML=document.getElementById("grid")
        this.CreateAsientos();
    }
//////////////////////////////////////////////////////////////////////////////////////
    CreateAsientos(){
        for (var i=1; i<this.num_asientos; i++){
            var tA=new clsAsiento(i,this.number);
            this.asientos.push(tA);
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
    DrawAsientos(){
        for (var i=0; i<this.num_asientos; i++){
            var tA=this.asientos[i];
            var tCell=tA.Draw();
            this.containerHTML.appendChild(tCell);
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
    EraseAsientos(){
        this.containerHTML.innerHTML="";
    }
//////////////////////////////////////////////////////////////////////////////////////
    Draw(){
        this._html_cell=document.createElement("div");
        this._html_cell.className="room";
        this._html_cell.innerHTML="Room:"+this.number;
        this._html_cell.addEventListener ("click",this.onclick.bind(this));
        this._html_cell.id="Entering the Room number: "+this.number+".";
        this.containerHTML.appendChild(this._html_cell);
    }
//////////////////////////////////////////////////////////////////////////////////////
    onclick(){
        console.log(this._html_cell.id);
        this.EraseAsientos();
        this.DrawAsientos();
    }
}