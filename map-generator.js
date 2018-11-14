const generateBaseArray = (sizeX, sizeY) => {
  let baseArray = [];
  const totalCells = sizeX * sizeY;

  for (let cellNum = 0; cellNum < totalCells; cellNum++) {
    for (let i = 0; i < sizeX; i++) {
      for (let j = 0; j < sizeY; j++) {
        baseArray[cellNum].xCoordinate = i;
        baseArray[cellNum].yCoordinate = j;    
      }
    }
  }

  return baseArray;
}

const mapGenerator = (sizeX, sizeY) => {

}