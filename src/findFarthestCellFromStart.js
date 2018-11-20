/* eslint-disable linebreak-style */

export default function findFarthestCellFromStart(sizeX, sizeY) {
  const farthestCell = {};
  farthestCell.xDistanceFromStart = getLargerValue(startingCell.x, sizeX - 1);
  farthestCell.yDistanceFromStart = getLargerValue(startingCell.y, sizeY - 1);
  if (startingCell.x > Math.floor(sizeX / 2)) {
    farthestCell.x = startingCell.x - farthestCell.xDistanceFromStart;
  } else {
    farthestCell.x = startingCell.x + farthestCell.xDistanceFromStart - 1;
  }
  if (startingCell.y > Math.floor(sizeY / 2)) {
    farthestCell.y = startingCell.y - farthestCell.yDistanceFromStart;
  } else {
    farthestCell.y = startingCell.y + farthestCell.yDistanceFromStart - 1;
  }
  return farthestCell;
}
