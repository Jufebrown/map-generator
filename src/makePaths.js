/* eslint-disable linebreak-style */
import randomNumberGenerator from './randomNumGenerator';
import validCell from './validCell';
import getNeighborCellCoords from './getNeighborCellCoords';
import assignDoor from './assignDoor';
import getDisplacementBetweenCells from './getDisplacementBetweenCells';
import getSpecificSetPiece from './getSpecificSetPiece';
import getAllSetPieces from './getAllSetPieces';

export default function makePaths(sizeX, sizeY, mapArray) {
  const directions = ['north', 'south', 'east', 'west'];
  const startingCell = getSpecificSetPiece(mapArray, 2);
  const exit = getSpecificSetPiece(mapArray, 3);
  const direction = directions[randomNumberGenerator(0, 4)];
  let currentCell = startingCell;
  let nextCell = getNeighborCellCoords(currentCell, direction);
  let workingArray = mapArray;
  const setPieceArray = getAllSetPieces(mapArray);


  setPieceArray.array.forEach((setPiece) => {
    const displacement = getDisplacementBetweenCells(exit, setPiece);
  });

  if (validCell(sizeX, sizeY, nextCell, workingArray)) {
    workingArray = assignDoor(currentCell, direction, mapArray);
    currentCell = nextCell;
    nextCell = getNeighborCellCoords(currentCell, direction);
  }
  return workingArray;
}
