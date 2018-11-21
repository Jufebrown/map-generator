/* eslint-disable linebreak-style */
import getNeighborCellCoords from './getNeighborCellCoords';

export default function assignDoor(currentCell, direction, mapArray) {
  const workingArray = mapArray;
  const cellOnOtherSideOfDoor = getNeighborCellCoords(currentCell, direction);
  switch (direction) {
    case 'north':
      workingArray[currentCell.x][currentCell.y].doors[0] = 1;
      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].doors[1] = 1;
      break;

    case 'south':
      workingArray[currentCell.x][currentCell.y].doors[1] = 1;
      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].doors[0] = 1;
      break;

    case 'east':
      workingArray[currentCell.x][currentCell.y].doors[2] = 1;
      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].doors[3] = 1;
      break;

    case 'west':
      workingArray[currentCell.x][currentCell.y].doors[3] = 1;
      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].doors[2] = 1;
      break;

    default:
      break;
  }
  return workingArray;
}
