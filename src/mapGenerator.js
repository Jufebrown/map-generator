/* eslint-disable linebreak-style */
import generateBaseMapArray from './generateBaseMapArray';
import designateStartingCell from './designateStartingCell';
import setExit from './setExit';
import drawMap from './drawMap';

export default function mapGenerator(sizeX, sizeY) {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  mapArray = designateStartingCell(sizeX, sizeY, mapArray);
  mapArray = setExit(sizeX, sizeY, mapArray);
  drawMap(sizeX, sizeY, mapArray);
}
