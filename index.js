const button = document.querySelector("button"); 
const h1 = document.querySelector("h1");

function makeRandomColor(){
    const r = Math.floor( Math.random() * 255 ) + 1; 
    const g = Math.floor( Math.random() * 255 ) + 1; 
    const b = Math.floor( Math.random() * 255 ) + 1; 
    return {r,g,b};
}


button.addEventListener("click", () => {
    const {r,g,b} = makeRandomColor();

    const randomColor = `rgb(${r},${g},${b})`;
    if(r < 150 && g < 150 && b < 150){ 
        h1.style.color = "white";
    }
    document.body.style.backgroundColor = randomColor ;
    h1.innerText = randomColor.toUpperCase();
});

//rgb(200,123,34); 