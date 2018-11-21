/* eslint-disable linebreak-style */
export default function getSpecificSetPiece(mapArray, cellType) {
  for (let i = 0; i < mapArray.length; i += 1) {
    for (let j = 0; j < mapArray[i].length; j += 1) {
      if (mapArray[i][j].cellType === cellType) {
        const searchCell = mapArray[i][j];
        return searchCell;
      }
    }
  }
  return null;
}
