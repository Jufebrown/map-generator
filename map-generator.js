/* eslint-disable linebreak-style */
// generate an array of cells based on given sizes

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
  const startingXCoord = randomNumGenerator(0, sizeX);
  const startingYCoord = randomNumGenerator(0, sizeY);
  workingArray[startingXCoord][startingYCoord].startingCell = true;
  workingArray[startingXCoord][startingYCoord].cellType = 1;
  return workingArray;
};

// const findFarthestCell = (sizeX, sizeY) => {
//   const farthestCellCoordinates = {};
//   farthestCellCoordinates.x = Math.abs(startingCell.x - sizeX);
//   farthestCellCoordinates.y = Math.abs(startingCell.y - sizeY);
// };

const drawMap = (sizeX, mapArray) => {
  const miniMap = document.querySelector('.map');
  let mapString = '';

  mapArray.forEach((cell) => {
    if (cell.x === 0) {
      mapString += '<div class="map-row">';
    }
    if (cell.cellType === 0) {
      mapString += '<div class="cell wall"></div>';
    } else if (cell.cellType === 1) {
      mapString += '<div class="cell room"></div>';
    }
    if (cell.x === (sizeX - 1)) {
      mapString += '</div>';
    }
  });

  miniMap.innerHTML = mapString;
};

const mapGenerator = (sizeX, sizeY) => {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  mapArray = designateStartingCell(sizeX, sizeY, mapArray);
  // drawMap(sizeX, mapArray);
  return mapArray;
};

mapGenerator(20, 20);
