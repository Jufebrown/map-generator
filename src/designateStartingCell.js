/* eslint-disable linebreak-style */
import getSafeRandomCell from './getSafeRandomCell';

// pick one cell to be the starting position for the player
export default function designateStartingCell(sizeX, sizeY, mapArray) {
  const workingArray = mapArray;
  const startingCell = getSafeRandomCell(sizeX, sizeY, mapArray);
  workingArray[startingCell.x][startingCell.y].startingCell = true;
  workingArray[startingCell.x][startingCell.y].cellType = 1;
  return workingArray;
}
