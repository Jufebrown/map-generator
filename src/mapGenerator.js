/* eslint-disable linebreak-style */
import generateBaseMapArray from './generateBaseMapArray';
import drawMap from './drawMap';
import distributeSetPieces from './distributeSetPieces';

export default function mapGenerator(sizeX, sizeY) {
  let mapArray = generateBaseMapArray(sizeX, sizeY);
  mapArray = distributeSetPieces(sizeX, sizeY, mapArray);
  drawMap(sizeX, sizeY, mapArray);
}
