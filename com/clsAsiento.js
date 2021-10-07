class clsAsiento{
    constructor(pNumberAsiento){
        this.number=pNumberAsiento;
        this.ocuppied=0; // 0 = libre, 1 = ocupado, 2 = pendiente pago, 3 = reservado.
    }
//////////////////////////////////////////////////////////////////////////////////////
    reservarAsiento(){
        this.ocuppied=1;
    }
//////////////////////////////////////////////////////////////////////////////////////
    Draw(){
        let cell=document.createElement("div");
        cell.innerHTML="Seat:"+this.number;
        cell.className="cell";
        cell.id="a"+this.number;
        return cell;
    }
}