/* eslint-disable linebreak-style */
export default function getAllSetPieces(mapArray) {
  const setPieceArray = [];

  mapArray.forEach((cell) => {
    if (cell.cellType > 1) {
      setPieceArray.push(cell);
    }
  });
  return setPieceArray;
}
