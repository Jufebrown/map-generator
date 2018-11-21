/* eslint-disable linebreak-style */

export default function drawMap(sizeX, sizeY, mapArray) {
  const miniMap = document.querySelector('.map');
  let mapString = '';
  for (let i = 0; i < sizeY; i += 1) {
    for (let j = 0; j < sizeX; j += 1) {
      const currentCell = mapArray[j][i];
      if (currentCell.x === 0) {
        mapString += '<div class="map-row">';
      }
      switch (currentCell.cellType) {
        case 0:
          mapString += '<div class="cell wall"></div>';
          break;
        case 1:
          mapString += '<div class="cell room"></div>';
          break;
        case 2:
          mapString += '<div class="cell room start"></div>';
          break;
        case 3:
          mapString += '<div class="cell room exit"></div>';
          break;
        case 4:
          mapString += '<div class="cell room"></div>';
          break;
        default:
          break;
      }
      if (currentCell.x === (sizeX - 1)) {
        mapString += '</div>';
      }
    }
  }
  miniMap.innerHTML = mapString;
}
