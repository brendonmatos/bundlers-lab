import { divide, sum } from "@bundlers/math"

const calculateMean = (numbers: number[]) => {
  return divide(numbers.reduce(sum), numbers.length);
}

export default calculateMean;