/* eslint-disable linebreak-style */
import generateBaseMapArray from './generateBaseMapArray';
import drawMap from './drawMap';
import distributeSetPieces from './distributeSetPieces';
import makePaths from './makePaths';

export default function mapGenerator(sizeX, sizeY) {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  mapArray = distributeSetPieces(sizeX, sizeY, mapArray);
  mapArray = makePaths(sizeX, sizeY, mapArray);
  drawMap(sizeX, sizeY, mapArray);
}
