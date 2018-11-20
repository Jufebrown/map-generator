/* eslint-disable linebreak-style */
import conflictCheck from './conflictCheck';

const isWithinBounds = (sizeX, sizeY, cellCoords) => {
  if (cellCoords.x < 0 || cellCoords.x >= sizeX) { return false; }
  if (cellCoords.y < 0 || cellCoords.y >= sizeY) { return false; }
  return true;
};

export default function validCell(sizeX, sizeY, cellCoords, mapArray) {
  if (!isWithinBounds(sizeX, sizeY, cellCoords) || conflictCheck(cellCoords, mapArray)) {
    return false;
  }
  return true;
}
