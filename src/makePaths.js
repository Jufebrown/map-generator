/* eslint-disable linebreak-style */
import randomNumberGenerator from './randomNumGenerator';
import validCell from './validCell';
import getNeighborCellCoords from './getNeighborCellCoords';
import assignDoor from './assignDoor';
import getDisplacementBetweenCells from './getDisplacementBetweenCells';
import getSpecificSetPiece from './getSpecificSetPiece';
import getAllSetPieces from './getAllSetPieces';

const chooseRandomAxis = () => {
  const axes = ['x', 'y'];
  const axis = axes[randomNumberGenerator(0, 2)];
  return axis;
};

const determineStartingAxis = (displacement) => {
  if (displacement.x !== 0 && displacement.y !== 0) {
    return chooseRandomAxis();
  }
  if (displacement.x === 0 && displacement.y !== 0) {
    return 'y';
  }
  if (displacement.x !== 0 && displacement.y === 0) {
    return 'x';
  }
  return null;
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
  setPieceArray.forEach((setPiece) => {
    // get displacement between exit and each setpiece
    const displacement = getDisplacementBetweenCells(exit, setPiece);
    // choose the starting axis of direction to move on to make path
    axisOfMovement = determineStartingAxis(displacement);
    // move down axis of movement setting each cell to be hallway and setting doors on each cell
  });

  if (validCell(sizeX, sizeY, nextCell, workingArray)) {
    workingArray = assignDoor(currentCell, direction, mapArray);
    currentCell = nextCell;
    nextCell = getNeighborCellCoords(currentCell, direction);
  }
  return workingArray;
}
