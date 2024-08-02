let comp = Math.floor(Math.random()*5)
//console.log(comp);
let gameUser = true
function choise(user){
    if(gameUser == true){
        document.getElementById("box"+user).style.animation = "shake 0.2s 10";
        setTimeout(function(){
            if(comp==user){
                document.getElementById("box"+user).src = "Pictures/pi.jpg";
                document.getElementById("restartButton").style.display = "flex";
                document.getElementById("textHello").style.display = "none";
                document.getElementById("textWinner").style.display = "block";
            } 
            else{
                document.getElementById("box"+user).src = "Pictures/pngwing.com (10).png";
                document.getElementById("restartButton").style.display = "flex";
                document.getElementById("textHello").style.display = "none";
                document.getElementById("textLooser").style.display = "block";
            }
        }, 2000)
        
        gameUser = false;
    }
}
s
function reloadGame(){
    location.reload();
}