let btnChangeColor = document.getElementById("changeColor");
let btnCopyColor = document.getElementById("copyColor");
let backgroundElement = document.getElementById("background");
let textColorElement = document.getElementById("textColor");

btnChangeColor.addEventListener("click",()=>{
    let color = getColor();
    backgroundElement.style.background = color;
    textColorElement.innerHTML = color;
})

btnCopyColor.addEventListener("click",()=>{
    let aux = document.createElement("input");
    aux.value = textColorElement.innerHTML;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    setTimeout(getMessage(),1000);
})


function getColor(){
    let hexadecimal = [1,2,3,4,5,6,7,8,9,10,"A","B","C","D","E","F"];
    let hexadecimalColor = "#";
    for (let i = 0; i <= 2; i++) {
        hexadecimalColor += hexadecimal[Math.floor(Math.random()*hexadecimal.length)] 
    } 
    return hexadecimalColor;
}

function getMessage(){
  
}