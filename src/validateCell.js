/* eslint-disable linebreak-style */
const isWithinBounds = (sizeX, sizeY, cellCoords) => {
  if (cellCoords.x < 0 || cellCoords.x >= sizeX) { return false; }
  if (cellCoords.y < 0 || cellCoords.y >= sizeY) { return false; }
  return true;
};

const conflictCheck = (cellCoords, mapArray) => {
  for (let i = 0; i < mapArray.length; i += 1) {
    for (let j = 0; j < mapArray[i].length; j += 1) {
      if (mapArray[i][j].x === cellCoords.x && mapArray[i][j].y === cellCoords.y) {
        if (mapArray[i][j].cellType > 0) {
          return true;
        }
      }
    }
  }
  return false;
};

export default function validateCell(sizeX, sizeY, cellCoords, mapArray) {
  if (!isWithinBounds(sizeX, sizeY, cellCoords) || conflictCheck(cellCoords, mapArray)) {
    return false;
  }
  return true;
}
