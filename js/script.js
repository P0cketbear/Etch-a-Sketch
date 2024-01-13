





// Botones

let brushColor = "gold";

const btn_black = document.querySelector('#btn-black')
btn_black.addEventListener('click', () => {
    brushColor = "black";
})

const btn_green = document.querySelector('#btn-green')
btn_green.addEventListener('click', () => {
    brushColor = "greenyellow";
})

const btn_blue = document.querySelector('#btn-blue')
btn_blue.addEventListener('click', () => {
    brushColor = "blue";
})

const btn_red = document.querySelector('#btn-red')
btn_red.addEventListener('click', () => {
    brushColor = "red";
})

const btn_rainbow = document.querySelector('#btn-rainbow')
btn_rainbow.addEventListener('click', () => {
    brushColor = "rainbow";
})


const btn_size = document.querySelector('#btn-size')
btn_size.addEventListener('click', () => {
    resize()
})



// funcion conseguida en stackoverflow

function colorAleatorio() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}




function resize() {
    let newSize = prompt('Enter the number of tiles to set a new width (Min 2, Max 100)');

    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 2) {
        gridSize = 2;
    } else if (newSize > 100) {
        gridSize = 100;
    } else {
        gridSize = newSize;
    }

    genGrid(gridSize);

}

genGrid(16);


function genGrid(gridSize) {

    // Contenedor

    const gridCont = document.querySelector('.gridContainer');

    gridCont.innerHTML = "";

    for (let index = 0; index < (gridSize * gridSize); index++) {
        let gDiv = document.createElement('div');
        gDiv.style.width = (520 / gridSize) + "px";
        gDiv.style.height = (520 / gridSize) + "px";
        gDiv.setAttribute('id', 'gridDiv');
        gridCont.appendChild(gDiv);

        gDiv.addEventListener('mouseover', () => {
            if (brushColor === "rainbow") {
                gDiv.style.backgroundColor = colorAleatorio()
            } else {
                gDiv.style.backgroundColor = brushColor;
            }
        });

    }




}
