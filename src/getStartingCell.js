/* eslint-disable linebreak-style */
export default function getStartingCell(mapArray) {
  for (let i = 0; i < mapArray.length; i += 1) {
    for (let j = 0; j < mapArray[i].length; j += 1) {
      if (mapArray[i][j].startingCell === true) {
        const startingCell = mapArray[i][j];
        return startingCell;
      }
    }
  }
  return null;
}
