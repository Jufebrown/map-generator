/* eslint-disable linebreak-style */
export default function randomNumberGenerator(loLimit, range) {
  return Math.floor(Math.random() * (range)) + (loLimit);
}
