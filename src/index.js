/* eslint-disable linebreak-style */

// generate an array of cells based on given sizes
import setPieces from './setPieces';
import generateBaseMapArray from './generateBaseMapArray';
import designateStartingCell from './designateStartingCell';
import drawMap from './drawMap';
import setExit from './setExit';

const mapGenerator = (sizeX, sizeY) => {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  mapArray = designateStartingCell(sizeX, sizeY, mapArray);
  mapArray = setExit(sizeX, sizeY, mapArray);
  drawMap(sizeX, sizeY, mapArray);
};

mapGenerator(15, 15);
