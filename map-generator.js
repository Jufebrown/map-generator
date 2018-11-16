// generate an array of cells based on given sizes
const generateBaseMapArray = (sizeX, sizeY) => {
  let mapArray = [];
  let xArray = []

  for (let i = 0; i < sizeX; i++) {
    let cellObj = {};
    cellObj.isRoom = false;
    cellObj.startingCell = false;
    xArray.push(cellObj);
  }

  for (let j = 0; j < sizeY; j++) {
    mapArray.push(xArray);
  }

  return mapArray;
}

// pick one cell to be the starting position for the player
const designateStartingCell = (mapArray) => {
  startingCell = Math.floor(Math.random() * mapArray.length) + 1;
  mapArray[startingCell].startingCell = true;
  return mapArray;
}

const mapGenerator = (sizeX, sizeY) => {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  return designateStartingCell(mapArray);
}