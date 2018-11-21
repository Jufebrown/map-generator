/* eslint-disable linebreak-style */
import randomNumberGenerator from './randomNumGenerator';
import validCell from './validCell';
import getStartingCell from './getStartingCell';
import getNeighborCellCoords from './getNeighborCellCoords';
import assignDoor from './assignDoor';

export default function makePaths(sizeX, sizeY, mapArray) {
  const directions = ['north', 'south', 'east', 'west'];
  const startingCell = getStartingCell(mapArray);
  const startingDirection = directions[randomNumberGenerator(0, 3)];
  let currentCell = startingCell;
  const nextCell = getNeighborCellCoords(currentCell, startingDirection);
  let workingArray = mapArray;

  if (validCell(sizeX, sizeY, nextCell, workingArray)) {
    workingArray = assignDoor(currentCell, startingDirection, mapArray);
    currentCell = nextCell;
  }
}
