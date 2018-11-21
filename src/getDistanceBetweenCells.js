/* eslint-disable linebreak-style */
const difference = (value1, value2) => value1 - value2;

export default function getDistanceBetweenCells(cell1, cell2) {
  const distance = {
    x: difference(cell1.x, cell2.x),
    y: difference(cell1.y, cell2.y),
  };
  return distance;
}
