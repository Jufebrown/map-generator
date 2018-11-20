/* eslint-disable linebreak-style */
import randomNumGenerator from './randomNumGenerator';
import findFarthestCellFromStart from './findFarthestCellFromStart';

export default function setExit(sizeX, sizeY, mapArray) {
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
}
