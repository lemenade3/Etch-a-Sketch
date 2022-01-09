// Grid Creation

const container = document.querySelector(".container");
let size = 16;

function makeGrid() {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let i = 0; i < size; i++) {
            const pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            row.append(pixel);
            pixel.addEventListener('mouseover', function () {
                pixel.style.background = 'black'
            });
        };
        container.append(row);
    };
};

makeGrid();

// Grid sizing

let slider = document.getElementById("myRange");
let output = document.getElementById("num");
output.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = this.value;
  resizeGrid();
}

function resizeGrid() {
    while (container.firstChild) container.removeChild(container.firstChild);
    size = slider.value;
    makeGrid();
}

// Access pixels

const pixels = document.getElementsByClassName("pixel");

// Button for clearing grid

const clearButton = document.querySelector("#clearButton");

function clearGrid() {
    for (i = 0; i < pixels.length; i++) {
        pixels[i].style.background = 'white';
    };
};

clearButton.addEventListener('click', function () {
    clearGrid();
    modal.style.display = "block";
});

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
