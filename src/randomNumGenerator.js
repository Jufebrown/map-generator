/* eslint-disable linebreak-style */
export default function randomNumberGenerator(loLimit, hiLimit) {
  return Math.floor(Math.random() * (hiLimit)) + (loLimit);
}
