/* eslint-disable linebreak-style */
export default function isWithinBounds(sizeX, sizeY, cellCoords) {
  if (cellCoords.x < 0 || cellCoords.x >= sizeX) { return false; }
  if (cellCoords.y < 0 || cellCoords.y >= sizeY) { return false; }
  return true;
}
