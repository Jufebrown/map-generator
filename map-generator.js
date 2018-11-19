/* eslint-disable linebreak-style */
// generate an array of cells based on given sizes

const generateBaseMapArray = (sizeX, sizeY) => {
  const mapArray = [];

  for (let i = 0; i < sizeX; i += 1) {
    for (let j = 0; j < sizeY; j += 1) {
      const roomObj = {};
      roomObj.x = i;
      roomObj.y = j;
      roomObj.startingCell = false;
      roomObj.cellType = 0;
      roomObj.doorNorth = 0;
      roomObj.doorSouth = 0;
      roomObj.doorEast = 0;
      roomObj.doorWest = 0;
      mapArray.push(roomObj);
    }
  }

  return mapArray;
};

const isBoundaryCell = (mapArray, cellNumber, sizeX, sizeY) => {
  if (mapArray[cellNumber].x === (0 || sizeX - 1)) {
    return true;
  }
  if (mapArray[cellNumber].y === (0 || sizeY - 1)) {
    return true;
  }
  return false;
};

const randomNumGenerator = (loLimit, hiLimit) => Math.floor(Math.random() * (hiLimit)) + (loLimit);

// pick one cell to be the starting position for the player
const designateStartingCell = (sizeX, sizeY, mapArray) => {
  const workingArray = mapArray;
  const numberOfCells = sizeX * sizeY;
  const startingCell = workingArray[randomNumGenerator(0, numberOfCells)];
  startingCell.startingCell = true;
  startingCell.cellType = 1;
  return workingArray;
};

const mapGenerator = (sizeX, sizeY) => {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  mapArray = designateStartingCell(sizeX, sizeY, mapArray);

  return mapArray;
};

const drawMap = (sizeX, sizeY) => {
  let mapString = '';
  let rowString = '';

  for (let i = 0; i < sizeX; i += 1) {
    rowString += '<div class="cell wall"></div>';
  }
  rowString = `<div class="map-row">${rowString}</div>`;
  for (let j = 0; j < sizeY; j += 1) {
    mapString += rowString;
  }
  const miniMap = document.querySelector('.map');
  miniMap.innerHTML = mapString;
};

drawMap(10, 10);
