import { statisticalMean } from '@bundlers/statistics-babel'
import { calculateForce } from '@bundlers/physics-esbuild'

export const calculate = () => {

  const force = calculateForce(10, 5);
  const mean = statisticalMean([1, 2, 3, 4, 5]);

  return `Force: ${force}, Mean: ${mean}`

}



