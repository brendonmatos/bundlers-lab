import { statisticalMean } from '@bundlers/statistics-babel'
import { calculatePhysicalForce } from '@bundlers/physics-esbuild'

export const calculate = () => {

  console.log('Hello from the calculator app!');

  // console.log(physics)

  const force = calculatePhysicalForce(10, 5);
  const mean = statisticalMean([1, 2, 3, 4, 5]);

  return `Force: ${force}, Mean: ${mean}`

}



