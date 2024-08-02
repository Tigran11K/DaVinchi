let energyLeo =document.getElementById("energy").innerHTML;
let powerLeo = document.getElementById("power").innerHTML - 1;
let countLeo = document.getElementById("count").innerHTML;
let countMinutes = document.getElementById("countHour").innerHTML;
let costPower = document.getElementById("costPower").innerHTML;

function tapLeo(){
    if(energyLeo >= powerLeo){
        energyLeo = energyLeo - powerLeo;
        countLeo = Number(countLeo) + Number(powerLeo);
        
        document.getElementById("energy").innerHTML = energyLeo;
        document.getElementById("count").innerHTML = Math.floor(countLeo);
    }
}

document.getElementById("buttonLeo").addEventListener("mousedown", newPoint)

function newPoint(event){
    if(energyLeo >= powerLeo){
        let newImg = document.createElement("img");
        newImg.src = "Pictures/icons8-биткоин-32.png";
        newImg.style.position = "absolute";
        newImg.style.width = "40px";
        newImg.style.height = "40px";
        newImg.style.left = event.pageX +"px";
        newImg.style.top = event.pageY +"px";
        document.getElementById("buttonLeo").appendChild(newImg);

        let startPoint = event.pageY;
        let op = 100;
        let animatePoint = setInterval(function(){
            startPoint = startPoint - 2;
            newImg.style.top = startPoint + "px";
            newImg.style.filter = "opacity("+op+"%)";
            op--;
        }, 10);

        setTimeout(function(){
            clearInterval(animatePoint);
            newImg.remove();
        }, 500);
    }
}

setInterval(addEnergy, 700);

function addEnergy(){
    if(energyLeo <= 100 - powerLeo){
        energyLeo += powerLeo; //energyleo = energyLeo + powerLeo
        document.getElementById("energy").innerHTML = energyLeo;
    }
    countLeo = Number(countLeo) + document.getElementById("countHour").innerHTML/120;
    document.getElementById("count").innerHTML = Math.floor(countLeo);
}

function buyPower(){
    if(countLeo >= document.getElementById("costPower").innerHTML){
        powerLeo++;
        document.getElementById("power").innerHTML = powerLeo + 1;   
        countLeo -= document.getElementById('costPower').innerHTML;
        document.getElementById("costPower").innerHTML *= 5;       
    }
}

function openSetWindow(){
    document.getElementById("testingSetWindow").showModal();
}
function closeSetWindow(){
    document.getElementById("testingSetWindow").close();
}
function openInWindow(){
    document.getElementById("testingInWindow").showModal();
}
function closeInWindow(){
    document.getElementById("testingInWindow").close();
}

function buyard(numberCard){
   if(countLeo >= document.getElementById("costCardId"+numberCard).innerHTML){
    countLeo = Number(countLeo) - document.getElementById("costCardId"+numberCard).innerHTML;
    document.getElementById("countHour").innerHTML = Number(document.getElementById("countHour").innerHTML) + Number(document.getElementById("countCardId"+numberCard).innerHTML);
    document.getElementById("levelCardId"+numberCard).innerHTML = Number(document.getElementById("levelCardId"+numberCard).innerHTML) + 1;
    document.getElementById("costCardId"+numberCard).innerHTML = Number(document.getElementById("costCardId"+numberCard).innerHTML) * 2;
    document.getElementById("countCardId"+numberCard).innerHTML = Math.floor(Number(document.getElementById("countCardId"+numberCard).innerHTML)*1.5);
   }
}