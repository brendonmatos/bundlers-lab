import { multiply } from "@bundlers/math"

const calculateForce = (mass: number, acceleration: number) => {
  return multiply(mass, acceleration);
}

export default calculateForce;