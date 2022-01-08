const container = document.querySelector("#container");


function makeGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.setAttribute('id', 'row');
        for (let i = 0; i < 16; i++) {
            const pixel = document.createElement('div');
            pixel.setAttribute('id', 'pixel');
            row.append(pixel);
        }
        container.append(row);
    }
}

makeGrid();



