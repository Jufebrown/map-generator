/* eslint-disable linebreak-style */

// generate an array of cells based on given sizes
import validateCell from './validateCell';
import setPieces from './setPieces';
import generateBaseMapArray from './generateBaseMapArray';
import randomNumGenerator from './randomNumGenerator';

let startingCell = {};
let currentCell = {};

// cellTypes:
//        0 = wall
//        1 = room
//        2 = exit

const chooseRandomCellCoords = (sizeX, sizeY) => {
  const randomCell = {};
  randomCell.x = randomNumGenerator(0, sizeX);
  randomCell.y = randomNumGenerator(0, sizeY);
  return randomCell;
};

const getSafeRandomCell = (sizeX, sizeY, mapArray) => {
  let candidateCell = chooseRandomCellCoords(sizeX, sizeY);
  while (!validateCell(sizeX, sizeY, candidateCell, mapArray)) {
    candidateCell = chooseRandomCellCoords(sizeX, sizeY);
  }
  return candidateCell;
};

// pick one cell to be the starting position for the player
const designateStartingCell = (sizeX, sizeY, mapArray) => {
  const workingArray = mapArray;
  startingCell = getSafeRandomCell(sizeX, sizeY, mapArray);
  currentCell = startingCell;
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
  if (startingCell.x > Math.floor(sizeX / 2)) {
    farthestCell.x = startingCell.x - farthestCell.xDistanceFromStart;
  } else {
    farthestCell.x = startingCell.x + farthestCell.xDistanceFromStart - 1;
  }
  if (startingCell.y > Math.floor(sizeY / 2)) {
    farthestCell.y = startingCell.y - farthestCell.yDistanceFromStart;
  } else {
    farthestCell.y = startingCell.y + farthestCell.yDistanceFromStart - 1;
  }
  return farthestCell;
};

const setExit = (sizeX, sizeY, mapArray) => {
  const exitCell = findFarthestCellFromStart(sizeX, sizeY);
  const xVariance = randomNumGenerator(0, Math.floor(sizeX / 3));
  const yVariance = randomNumGenerator(0, Math.floor(sizeY / 3));
  if (exitCell.x > Math.round(sizeX / 2)) {
    exitCell.x -= xVariance;
  } else {
    exitCell.x += xVariance;
  }
  if (exitCell.y > Math.round(sizeY / 2)) {
    exitCell.y -= yVariance;
  } else {
    exitCell.y += yVariance;
  }
  const workingArray = mapArray;
  workingArray[exitCell.x][exitCell.y].cellType = 2;
  return workingArray;
};

const drawMap = (sizeX, sizeY, mapArray) => {
  const miniMap = document.querySelector('.map');
  let mapString = '';
  for (let i = 0; i < sizeY; i += 1) {
    for (let j = 0; j < sizeX; j += 1) {
      currentCell = mapArray[j][i];
      if (currentCell.x === 0) {
        mapString += '<div class="map-row">';
      }
      if (currentCell.cellType === 0) {
        mapString += '<div class="cell wall"></div>';
      } else if (currentCell.cellType > 0) {
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
  mapArray = setExit(sizeX, sizeY, mapArray);
  drawMap(sizeX, sizeY, mapArray);
  return mapArray;
};

mapGenerator(15, 15);
