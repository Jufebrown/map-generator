/* eslint-disable linebreak-style */

export default function getLargerValue(value1, value2) {
  const result1 = Math.abs(value1 - value2);
  const result2 = Math.abs(value1 - 0);
  return Math.max(result1, result2);
}
