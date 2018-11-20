/* eslint-disable linebreak-style */
import validCell from './validateCell';
import randomNumGenerator from './randomNumGenerator';

const chooseRandomCellCoords = (sizeX, sizeY) => {
  const randomCell = {};
  randomCell.x = randomNumGenerator(0, sizeX);
  randomCell.y = randomNumGenerator(0, sizeY);
  return randomCell;
};

export default function getSafeRandomCell(sizeX, sizeY, mapArray) {
  let candidateCell = chooseRandomCellCoords(sizeX, sizeY);
  while (!validCell(sizeX, sizeY, candidateCell, mapArray)) {
    candidateCell = chooseRandomCellCoords(sizeX, sizeY);
  }
  return candidateCell;
}
