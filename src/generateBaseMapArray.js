/* eslint-disable linebreak-style */
export default function generateBaseMapArray(sizeX, sizeY) {
  const mapArray = new Array(sizeY);

  for (let row = 0; row < sizeY; row += 1) {
    mapArray[row] = new Array(sizeX);
  }

  for (let i = 0; i < sizeY; i += 1) {
    for (let j = 0; j < sizeX; j += 1) {
      const roomObj = {};
      roomObj.x = j;
      roomObj.y = i;
      roomObj.startingCell = false;
      roomObj.cellType = 0;
      roomObj.doors = [0, 0, 0, 0];
      roomObj.description = '';
      mapArray[j][i] = roomObj;
    }
  }
  return mapArray;
}
