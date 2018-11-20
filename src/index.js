/* eslint-disable linebreak-style */

// generate an array of cells based on given sizes
import setPieces from './setPieces';
import generateBaseMapArray from './generateBaseMapArray';
import randomNumGenerator from './randomNumGenerator';
import designateStartingCell from './designateStartingCell';
import findFarthestCellFromStart from './findFarthestCellFromStart';

const setExit = (sizeX, sizeY, mapArray) => {
  const exitCell = findFarthestCellFromStart(sizeX, sizeY, startingCell);
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
      const currentCell = mapArray[j][i];
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
