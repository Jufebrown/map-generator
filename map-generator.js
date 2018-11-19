/* eslint-disable linebreak-style */
// generate an array of cells based on given sizes
const startingCell = {};
const currentCell = {};

const generateBaseMapArray = (sizeX, sizeY) => {
  const mapArray = new Array(sizeY);

  for (let row = 0; row < sizeY; row += 1) {
    mapArray[row] = new Array(sizeX);
  }

  for (let i = 0; i < sizeY; i += 1) {
    for (let j = 0; j < sizeX; j += 1) {
      const roomObj = {};
      roomObj.x = j;
      roomObj.y = i;
      roomObj.startingCell = false;
      roomObj.currentCell = false;
      roomObj.cellType = 0;
      roomObj.doorNorth = 0;
      roomObj.doorSouth = 0;
      roomObj.doorEast = 0;
      roomObj.doorWest = 0;
      mapArray[j][i] = roomObj;
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
  startingCell.x = randomNumGenerator(0, sizeX);
  startingCell.y = randomNumGenerator(0, sizeY);
  workingArray[startingCell.x][startingCell.y].startingCell = true;
  workingArray[startingCell.x][startingCell.y].cellType = 1;
  return workingArray;
};

const getLargerValue = (value1, value2) => {
  const result1 = Math.abs(value1 - value2);
  const result2 = Math.abs(value1 - 0);
  return Math.max(result1, result2);
};

const findFarthestCellFromStart = (sizeX, sizeY) => {
  const farthestCell = {};
  farthestCell.xDistanceFromStart = getLargerValue(startingCell.x, sizeX - 1);
  farthestCell.yDistanceFromStart = getLargerValue(startingCell.y, sizeY - 1);
  console.log('farthestCell', farthestCell);
};

const drawMap = (sizeX, sizeY, mapArray) => {
  const miniMap = document.querySelector('.map');
  let mapString = '';
  for (let i = 0; i < sizeY; i += 1) {
    for (let j = 0; j < sizeX; j += 1) {
      const currentCell = mapArray[j][i];
      if (currentCell.x === 0) {
        mapString += '<div class="map-row">';
      }
      if (currentCell.cellType === 0) {
        mapString += '<div class="cell wall"></div>';
      } else if (currentCell.cellType === 1) {
        mapString += '<div class="cell room"></div>';
      }
      if (currentCell.x === (sizeX - 1)) {
        mapString += '</div>';
      }
    }
  }

  miniMap.innerHTML = mapString;
};

const mapGenerator = (sizeX, sizeY) => {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  mapArray = designateStartingCell(sizeX, sizeY, mapArray);
  findFarthestCellFromStart(sizeX, sizeY);
  drawMap(sizeX, sizeY, mapArray);
  return mapArray;
};

mapGenerator(20, 20);
