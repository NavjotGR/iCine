class clsAsiento{
    constructor(pNumerodeasientos,test){
        this._SalaID=test;
        this._number=pNumerodeasientos;
        this._occupied=0; /* Math.round(Math.random()); 0 = libre, 1 = ocupado, 2 = pendiente pago, 3 = reservado. */
        this._html_cell;
        this.x;
        this.y;
        this._Init();  
    }
//////////////////////////////////////////////////////////////////////////////////////
    _Init(){
        this._CreateCell();
    }
    //////////////////////////////////////////////////////
    _CreateCell(){
        this._html_cell = document.createElement("div");
        this._html_cell.innerHTML = "Seat:" + this._number;
        this._html_cell.addEventListener("click",this.onclick.bind(this));
        this._html_cell.id = "sala" + this._number;
    }
    reservarAsiento(){
        console.log("Reserved");
        this._occupied=1;
        this._html_cell.className="cell_red";
        localStorage.setItem('ocupado'+this._number+this._SalaID, 1);
    }
//////////////////////////////////////////////////////////////////////////////////////
    Draw(){
        this._html_cell.className=this._getClassName();
        return this._html_cell;
    }
    /* Draw(){
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
    } */
    _getClassName(){
        var tClass="";
        if (localStorage.getItem('ocupado'+this._number+this._SalaID) == 1){
            tClass="cell_red";
        }

        else if (this.IsOccupied()) {
            tClass="cell_red";
        } else {
            tClass= "cell";
        }

        if (localStorage.getItem('user_num')==this._number){
            tClass = "cell_red_myseat";
        }
        return tClass;
    }

    onclick(){
        console.log("Seat:"+ this._html_cell.id);
        this.reservarAsiento();
    }
    

    IsOccupied(){
        return (this._occupied>0);
    }
}