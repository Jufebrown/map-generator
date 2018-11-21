/* eslint-disable linebreak-style */
import randomNumberGenerator from './randomNumGenerator';
import validCell from './validCell';
import getNeighborCellCoords from './getNeighborCellCoords';
import assignDoor from './assignDoor';
import getDisplacementBetweenCells from './getDisplacementBetweenCells';
import getSpecificSetPiece from './getSpecificSetPiece';
import getAllSetPieces from './getAllSetPieces';

const chooseAxis = () => {
  const axes = ['x', 'y'];
  const axis = axes[randomNumberGenerator(0, 2)];
  return axis;
};

export default function makePaths(sizeX, sizeY, mapArray) {
  const directions = ['north', 'south', 'east', 'west'];
  const direction = directions[randomNumberGenerator(0, 4)];
  let workingArray = mapArray;
  let axisOfMovement;
  const displacementArray = [];

  const exit = getSpecificSetPiece(mapArray, 3);
  const setPieceArray = getAllSetPieces(mapArray);
  let currentCell = exit;
  let nextCell = getNeighborCellCoords(currentCell, direction);

  // loop through setpieces
  setPieceArray.array.forEach((setPiece) => {
    // get displacement between exit and each setpiece
    const displacement = getDisplacementBetweenCells(exit, setPiece);
    // choose the starting axis of direction to move on to make path
    if (displacement.x !== 0 && displacement.y !== 0) {
      axisOfMovement = chooseAxis();
    } else if (displacement.x === 0 && displacement.y !== 0) {
      axisOfMovement = 'y';
    } else if (displacement.x !== 0 && displacement.y === 0) {
      axisOfMovement = 'x';
    } else {
      axisOfMovement = null;
    }
  });

  if (validCell(sizeX, sizeY, nextCell, workingArray)) {
    workingArray = assignDoor(currentCell, direction, mapArray);
    currentCell = nextCell;
    nextCell = getNeighborCellCoords(currentCell, direction);
  }
  return workingArray;
}
