/* eslint-disable linebreak-style */
export default function conflictCheck(cellCoords, mapArray) {
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
}
