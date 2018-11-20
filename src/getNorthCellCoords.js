/* eslint-disable linebreak-style */
export default function (currentCell) {
  const northCell = {
    x: currentCell.x,
    y: currentCell.y + 1,
  };
  return northCell;
}
