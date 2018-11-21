/* eslint-disable linebreak-style */
import randomNumberGenerator from './randomNumGenerator';
import validCell from './validCell';
import getStartingCell from './getStartingCell';
import getNeighborCellCoords from './getNeighborCellCoords';
import assignDoor from './assignDoor';
import getDisplacementBetweenCells from './getDisplacementBetweenCells';

const getDirection = (mapArray) => {
  const exit = {};
  for (let i = 0; i < mapArray.length; i++) {
    for (let j = 0; j < mapArray[i].length; j++) {
      const currentCell = mapArray[i][j];
      if (currentCell.cellType === 3) {
        exit.x = currentCell.x;
        exit.y = currentCell.y;
      }
    }
  }

  const setPieceArray = [];
  mapArray.forEach((cell) => {
    if (cell.cellType > 1) {
      setPieceArray.push(cell);
    }
  });

  setPieceArray.array.forEach((setPiece) => {
    const displacement = getDisplacementBetweenCells(exit, setPiece);
  });
};

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
