/* eslint-disable linebreak-style */
import setPieces from './setPieces';
import getSafeRandomCell from './getSafeRandomCell';

export default function distributeSetPieces(sizeX, sizeY, mapArray) {
  const workingArray = mapArray;
  for (let i = 0; i < setPieces.length; i += 1) {
    const setPiece = setPieces[i];
    let setPieceCell = {};
    setPieceCell = getSafeRandomCell(sizeX, sizeY, mapArray);
    workingArray[setPieceCell.x][setPieceCell.y].cellType = setPiece.cellType;
    workingArray[setPieceCell.x][setPieceCell.y].description = setPiece.description;
  }
  return workingArray;
}
