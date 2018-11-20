/* eslint-disable linebreak-style */

// generate an array of cells based on given sizes
import setPieces from './setPieces';
import generateBaseMapArray from './generateBaseMapArray';
import randomNumGenerator from './randomNumGenerator';
import designateStartingCell from './designateStartingCell';
import findFarthestCellFromStart from './findFarthestCellFromStart';
import drawMap from './drawMap';

const setExit = (sizeX, sizeY, mapArray) => {
  const exitCell = findFarthestCellFromStart(sizeX, sizeY, mapArray);
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
  workingArray[exitCell.x][exitCell.y].cellType = 3;
  return workingArray;
};

const mapGenerator = (sizeX, sizeY) => {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  mapArray = designateStartingCell(sizeX, sizeY, mapArray);
  mapArray = setExit(sizeX, sizeY, mapArray);
  drawMap(sizeX, sizeY, mapArray);
};

mapGenerator(15, 15);
