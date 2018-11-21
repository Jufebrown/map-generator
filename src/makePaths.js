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
  const nextCell = getNeighborCellCoords(currentCell, direction);
  let workingArray = mapArray;

  console.log('currentCell', currentCell);
  console.log('direction', direction);
  console.log('nextCell', nextCell);

  if (validCell(sizeX, sizeY, nextCell, workingArray)) {
    workingArray = assignDoor(currentCell, direction, mapArray);
    currentCell = nextCell;
    // nextCell = getNeighborCellCoords(currentCell, direction);
  }
  return workingArray;
}
