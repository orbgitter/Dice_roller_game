document.querySelector(".img1").classList.add("dice");
document.querySelector(".img2").classList.add("dice");

function compare(p1, p2) {
    if (p1 === p2) {
        console.log("it's a tie, tossing again")
        p1 = toss(1);
        p2 = toss(2);
        compare(p1, p2);
    } else if (p1 > p2) {
        document.querySelector("h1").textContent ="Player 1 won";
    } else {
        document.querySelector("h1").textContent = "Player 2 won";
    }    
    console.log("compared");
}

function clearFileNameChangedToNumber(fileName) {
    var temp = fileName;
    var num = temp.slice(11,12);
    console.log("clearFileNameChangedToNumber is " + num);
    return num;
}

function generatorRandomFileName(){
    var randomFileName,randToss;
    randToss = Math.floor(Math.random() * 6) + 1;
    randomFileName = "images/dice" + randToss + ".png";
    console.log("randomFileName value: " + randomFileName);
    return randomFileName
}

function toss(player){
    var randomFileName = generatorRandomFileName();
    document.querySelector(`.img${ player }`).setAttribute("src",randomFileName);
    return clearFileNameChangedToNumber(randomFileName);
}

function play() {
    var markedSideP1 = toss(1);
    var markedSideP2 = toss(2);
    compare(markedSideP1,markedSideP2);  
    console.log("game over");
}

play();
