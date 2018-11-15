// generate an array of cells based on given sizes
const generateBaseArray = (sizeX, sizeY) => {
  let baseArray = [];

  for (let i = 0; i < sizeX; i++) {
    for (let j = 0; j < sizeY; j++) {
      let cellObj = {};
      cellObj.xCoordinate = i;
      cellObj.yCoordinate = j;
      cellObj.startingCell = false;
      baseArray.push(cellObj);
    }
  }
  return baseArray;
}

// pick one cell to be the starting position for the player
const designateStartingCell = (baseArray) => {
  startingCell = Math.floor(Math.random() * baseArray.length) + 1;
  baseArray[startingCell].startingCell = true;
  return baseArray;
}

const mapGenerator = (sizeX, sizeY) => {
  let baseArray = generateBaseArray(sizeX, sizeY);
  return designateStartingCell(baseArray);
}