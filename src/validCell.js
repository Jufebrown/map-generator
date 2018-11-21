/* eslint-disable linebreak-style */
import conflictCheck from './conflictCheck';
import isWithinBounds from './isWithinBounds';

export default function validCell(sizeX, sizeY, cellCoords, mapArray) {
  if (!isWithinBounds(sizeX, sizeY, cellCoords) || conflictCheck(cellCoords, mapArray)) {
    return false;
  }
  return true;
}
