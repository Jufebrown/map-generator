/* eslint-disable linebreak-style */
// generate an array of cells based on given sizes

const generateBaseMapArray = (sizeX, sizeY) => {
  const mapArray = [];

  for (let i = 0; i < sizeX; i += 1) {
    for (let j = 0; j < sizeY; j += 1) {
      const cellObj = {};
      cellObj.x = i;
      cellObj.y = j;
      cellObj.startingCell = false;
      cellObj.cellType = 0;
      mapArray.push(cellObj);
    }
  }


  return mapArray;
};

const randomNumGenerator = (loLimit, hiLimit) => Math.floor(Math.random() * (hiLimit)) + (loLimit);

// pick one cell to be the starting position for the player
const designateStartingCell = (sizeX, sizeY, mapArray) => {
  // const xStartCoordinate = randomNumGenerator(0, sizeX);
  // const yStartCoordinate = randomNumGenerator(0, sizeY);
  // console.log('xstart: ', xStartCoordinate);
  // console.log('ystart: ', yStartCoordinate);
  const workingArray = mapArray;
  workingArray[0][2] = 1;
  return workingArray;
};

const mapGenerator = (sizeX, sizeY) => {
  const mapArray = generateBaseMapArray(sizeX, sizeY);
  return designateStartingCell(sizeX, sizeY, mapArray);
};
