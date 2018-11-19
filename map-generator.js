/* eslint-disable linebreak-style */
// generate an array of cells based on given sizes

const drawMap = (sizeX, sizeY) => {
  let mapString = '';
  let rowString = '';

  for (let i = 0; i < sizeX; i += 1) {
    rowString += '<div class="cell wall"></div>';
  }
  rowString = `<div class="map-row">${rowString}</div>`;
  for (let j = 0; j < sizeY; j += 1) {
    mapString += rowString;
  }
  console.log('mapString', mapString);
  const miniMap = document.querySelector('.map');
  miniMap.innerHTML = mapString;
};

drawMap(10, 10);
