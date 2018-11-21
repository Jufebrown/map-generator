/* eslint-disable linebreak-style */
import randomNumberGenerator from './randomNumGenerator';
import validCell from './validCell';
import getStartingCell from './getStartingCell';
import getNeighborCellCoords from './getNeighborCellCoords';
import assignDoor from './assignDoor';

export default function makePaths(sizeX, sizeY, mapArray) {
  const directions = ['north', 'south', 'east', 'west'];
  const startingCell = getStartingCell(mapArray);
  const direction = directions[randomNumberGenerator(0, 4)];
  let currentCell = startingCell;
  let nextCell = getNeighborCellCoords(currentCell, direction);
  let workingArray = mapArray;

  if (validCell(sizeX, sizeY, nextCell, workingArray)) {
    workingArray = assignDoor(currentCell, direction, mapArray);
    currentCell = nextCell;
    nextCell = getNeighborCellCoords(currentCell, direction);
  }
  return workingArray;
}
