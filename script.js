// Grid Creation

const container = document.querySelector(".container");
let size = 16;
let colour = 'black'

function makeGrid() {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let i = 0; i < size; i++) {
            const pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            row.append(pixel);
            pixel.addEventListener('mouseover', function () {
                pixel.style.background = colour;
            });
        };
        container.append(row);
    };
};

makeGrid();

// Access pixels

const pixels = document.getElementsByClassName("pixel");

// Button for clearing grid and open modal for next grid size option

const clearButton = document.querySelector("#cleanMe");

function clearGrid() {
    for (i = 0; i < pixels.length; i++) {
        pixels[i].style.background = 'white';
    };
};

clearButton.addEventListener('click', function () {
    clearGrid();
    modal.style.display = "block";
});

// Grid sizing

function resizeGrid() {
    while (container.firstChild) container.removeChild(container.firstChild);
    size = slider.value;
    makeGrid();
}

let slider = document.getElementById("myRange");
let output = document.getElementById("num");
output.textContent = slider.value;

slider.oninput = function() {
  output.textContent = this.value;
  resizeGrid();
}

// Modal for clean board and grid selector

let modal = document.getElementById("newBoardModal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function closeModal() {
  modal.style.display = "none";
}

window.onclick = function exitModal(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let exit = document.querySelector('#exit');

exit.onclick = function closeModal() {
  modal.style.display = "none";
}

// Buttons for colour / drawing style selection

const black = document.querySelector("#bPen");

black.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', function () {
            colour = 'black';
        });
    }
});

const pencil = document.querySelector("#pencil");

/*pencil.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', function () {
            colour = 'black';
            pixels[i].style.opacity -= '-0.1';
        });
    }
}); */

const selectColour = document.querySelector("#selectColour");
let colourSelector = document.querySelector("#colourSelector");

selectColour.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', function () {
            colour = colourSelector.value;
        });
    }
});

const erase = document.querySelector("#erase");

erase.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', function () {
            colour = 'white';
        });
    }
});

const rainbow = document.querySelector("#rPen");

rainbow.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', function () {
            colour = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        });
    }
});

// use event listener with if else inside make grid function to check which button clicked