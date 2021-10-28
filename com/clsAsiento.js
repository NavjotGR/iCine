class clsAsiento{
    constructor(pNumerodeasientos,pID){
        this._RoomID=pID;
        this._number=pNumerodeasientos;
        this._occupied=0; /* Math.round(Math.random()); 0 = libre, 1 = ocupado, 2 = pendiente pago, 3 = reservado. */
        this._html_cell;
        this.x;
        this.y;

    }
//////////////////////////////////////////////////////////////////////////////////////
    reservarAsiento(){
        /* console.log("Reserved"); */
        this._occupied=1;
        this._html_cell.className="cell_red";
    }
//////////////////////////////////////////////////////////////////////////////////////
    Draw(){
        this._html_cell = document.createElement("div");
        this._html_cell.innerHTML = "Seat:" + this._number;
        this._html_cell.addEventListener("click",this.onclick.bind(this));
        this._html_cell.id =this._number;
        this._html_cell.className=this.Storage();
        return this._html_cell;
    }
//////////////////////////////////////////////////////////////////////////////////////
    Storage(){
        var tClass="";
        if (localStorage.getItem('ocupado'+this._number+this._RoomID) == 1){
            tClass="cell_red";
        }
        else if (this.IsOccupied()) {
            tClass="cell_red";
        } else {
            tClass="cell";
        }
        /* if (localStorage.getItem('user_num')==this._number){
            tClass = "cell_red_myseat";
        } */
        return tClass;
    }
//////////////////////////////////////////////////////////////////////////////////////
    onclick(){
        console.log("You reserved the Seat number: "+ this._html_cell.id+".");
        this.reservarAsiento();
        localStorage.setItem('ocupado'+this._number+this._RoomID, 1);
    }
    IsOccupied(){
        return (this._occupied>0);
    }
}