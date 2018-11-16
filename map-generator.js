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

const randomNumberGenerator = (lowerLimit, upperLimit) {
  return Math.floor(Math.random() * upperLimit) + lowerLimit;  
}

// pick one cell to be the starting position for the player
const designateStartingCell = (sizeX, sizeY, mapArray) => {
  const 
}

const mapGenerator = (sizeX, sizeY) => {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  return designateStartingCell(sizeX, sizeY, mapArray);
}
