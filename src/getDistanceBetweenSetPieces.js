/* eslint-disable linebreak-style */
const difference = (value1, value2) => value1 - value2;

export default function getDistanceBetweenSetPoints(setPoint1, setPoint2) {
  const distance = {
    x: difference(setPoint1.x, setPoint2.x),
    y: difference(setPoint1.y, setPoint2.y),
  };
  return distance;
}
