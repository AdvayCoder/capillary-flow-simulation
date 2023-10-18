let simulationData = null;
const canvas = document.getElementById('grid');
const ctx = document.getElementById('grid').getContext('2d');

const GRID_WIDTH = canvas.width;
const GRID_HEIGHT = canvas.height;
const DISTANCE_SCALE_FACTOR = 40;
const SQUARE_SIZE = 30;

let currentStack = 1;
let currentIteration = 1;

ctx.translate(GRID_WIDTH / 2, GRID_HEIGHT / 2);

const fileInput = document.querySelector('input');

input.addEventListener('change', () => {
    const fileReader = new FileReader();

    fileReader.readAsText(fileInput.files[0]);

    fileReader.addEventListener('load', () => {
        simulationData = JSON.parse(fileReader.result);
        currentStack = 1;
        currentIteration = 1;
        document.getElementById('stack-label').innerText = currentStack;
        document.getElementById('iteration-label').innerText =
            currentIteration * simulationData.itertionInterval;
        renderIteration(1, 1);
    });
});

document.getElementById('prev-stack').addEventListener('click', () => {
    if (currentStack > 1 && simulationData) {
        currentStack--;
        document.getElementById('stack-label').innerText = currentStack;
        renderIteration(currentIteration, currentStack);
    }
});

document.getElementById('next-stack').addEventListener('click', () => {
    if (currentStack < simulationData?.stackHeight) {
        currentStack++;
        document.getElementById('stack-label').innerText = currentStack;
        renderIteration(currentIteration, currentStack);
    }
});

document.getElementById('prev-iteration').addEventListener('click', () => {
    if (currentIteration > 1 && simulationData) {
        currentIteration--;
        document.getElementById('iteration-label').innerText =
            currentIteration * simulationData.itertionInterval;
        renderIteration(currentIteration, currentStack);
    }
});

document.getElementById('next-iteration').addEventListener('click', () => {
    if (
        currentIteration <
        simulationData?.iterations / simulationData?.itertionInterval
    ) {
        currentIteration++;
        document.getElementById('iteration-label').innerText =
            currentIteration * simulationData.itertionInterval;

        renderIteration(currentIteration, currentStack);
    }
});

const renderIteration = (iterationNumber, stackNumber) => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, GRID_WIDTH, GRID_HEIGHT);

    ctx.translate(GRID_WIDTH / 2, GRID_HEIGHT / 2);

    let checkOffset = 0;
    simulationData.coordsDefinition.forEach((coord, index) => {
        //if entire array is empty, renders all-red grid
        if (
            simulationData.coordsData[iterationNumber - 1][stackNumber - 1]
                .length === 0
        ) {
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(
                coord.x * DISTANCE_SCALE_FACTOR,
                coord.y * DISTANCE_SCALE_FACTOR,
                SQUARE_SIZE,
                SQUARE_SIZE
            );

            return;
        }

        const actualCoord =
            simulationData.coordsData[iterationNumber - 1][stackNumber - 1][
                index - checkOffset
            ];
        if (coord.x === actualCoord.x && coord.y === actualCoord.y) {
            //render the square
            ctx.fillStyle = `rgba(0, 247, 255, ${1 * actualCoord.weight})`;
            ctx.fillRect(
                coord.x * DISTANCE_SCALE_FACTOR,
                coord.y * DISTANCE_SCALE_FACTOR,
                SQUARE_SIZE,
                SQUARE_SIZE
            );
        } else {
            //this means that the actual coordinate's weight value is 0
            //render empty sqaure
            ctx.fillStyle = 'rgb(255, 0, 0)';
            ctx.fillRect(
                coord.x * DISTANCE_SCALE_FACTOR,
                coord.y * DISTANCE_SCALE_FACTOR,
                SQUARE_SIZE,
                SQUARE_SIZE
            );
            checkOffset++;
        }
    });
};
