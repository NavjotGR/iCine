var mG


var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var anuncioParam = urlParams.get('get_num');


/* d = new clsDebug();
d.log("Que tal?");
d.openurl("https://google.es/"); */

/* mG = new clsMyGame();
mG.totext(); */


window.onload= function(){
    if (document.readyState=="complete"){
        mG = new clsiCine();
        //mG.totext();
    }
}