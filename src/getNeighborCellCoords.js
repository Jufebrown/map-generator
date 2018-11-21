/* eslint-disable linebreak-style */
export default function getNeighborCellCoords(currentCell, direction) {
  const neighborCell = {
    x: currentCell.x,
    y: currentCell.y,
  };

  switch (direction) {
    case 'north':
      neighborCell.y += 1;
      break;

    case 'south':
      neighborCell.y -= 1;
      break;

    case 'east':
      neighborCell.x += 1;
      break;

    case 'west':
      neighborCell.x -= 1;
      break;

    default:
      break;
  }
  return neighborCell;
}
