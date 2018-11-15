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

const determineStartingCell = (baseArray) => {
  startingCell = Math.floor(Math.random() * baseArray.length) + 1;
  return startingCell;
}

const mapGenerator = (sizeX, sizeY) => {
  const baseArray = generateBaseArray(sizeX, sizeY);

}