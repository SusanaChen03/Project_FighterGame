let tipeplayer1="ryu1"; //ryu, honda, chunli, ken
let tipeplayer2="honda2";//ryu,honda,chunli,ken

let lifeplayer1 = 100;
let lifeplayer2 = 100;

function punch(){

    if(tipeplayer1 === "ryu1"){ 
    document.getElementById("player1").src="../Images/ryu/ryu.gif";

    if(tipeplayer1 === "ken1"){
        document.getElementById("player1").src="../Images/ken/K manos dfre.png"
    }
    if(tipeplayer1 === "chunli1"){
        document.getElementById("player1").src="../Images/chunLi/C ataque mano.png"
    }

    if(tipeplayer1 === "honda1"){
        document.getElementById("player1").src="../Images/honda/Honda ataque.png"
    }

        let valor = 60;
        restliveoponent("player1", valor);

        setTimeout (back,2000);
    }
}
   

function back (){ 

    if(tipeplayer1 === "ryu1"){
    document.getElementById("player1").src="../Images/ryu/R en guardia.png";


        if ( lifeplayer2 <= 0){
            alert("jugador 1 has ganado");
        }
    }
}


function restliveoponent(player, valor){
    
    if (player == "player1"){
        lifeplayer2 = lifeplayer2 - valor;
        if (lifeplayer2 > 0){
            lifeplayer2 = 0;
        }
        document.getElementById("bv2").style="width: " + lifeplayer2 +"px;";
        
        
    }

    if (player == "player2"){
        document.getElementById("bv1").style="width: " + valor +"px;";
        lifeplayer1 = lifeplayer1 - valor;
        if (lifeplayer1 > 0){
            lifeplayer1 = 0;
        }
        }
    }



function ataquepatada (id){

    document.getElementById(id).src = imagenpatada();
    
}
    

function imagenpatadajugador1 (){
    
    let v = "../Images/ryu/R patada.png";

    return v;
} 


function blood1 (id,vsize){

    document.getElementById(id).style="width:" + vsize +"px;";

}
 