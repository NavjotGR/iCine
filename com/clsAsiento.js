class clsAsiento{
    constructor(pNumberAsiento){
        this._number=pNumberAsiento;
        this._occupied=0; /* Math.round(Math.random()); 0 = libre, 1 = ocupado, 2 = pendiente pago, 3 = reservado. */
        this._html_cell;
        this.x;
        this.y;
    }
//////////////////////////////////////////////////////////////////////////////////////
    reservarAsiento(){
        console.log("Reserved");
        this._occupied=1;
        this._html_cell.className="cell_red";
    }
//////////////////////////////////////////////////////////////////////////////////////
    Draw(){
        this._html_cell=document.createElement("div");
        let cell=this._html_cell;
        cell.innerHTML="Seat:"+this._number;

        if (this.IsOccupied()){
            this.reservarAsiento();
        }else{
            cell.className="cell";
        }

        cell.addEventListener ("click",this.onclick.bind(this));

        cell.id="a"+this._number;
        return cell;
    }

    onclick(){
        console.log("Seat:"+ this._html_cell.id);
        this.reservarAsiento();
        localStorage.setItem(this._number,this._occupied);
    }

    IsOccupied(){
        return (this._occupied>0);
    }
}