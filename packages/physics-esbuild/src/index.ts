import calculateForce from "./force"

export const calculatePhysicalForce = (mass: number, acceleration: number) => {
  console.log("IM IN THE PHYSICS PACKAGE")
  return calculateForce(mass, acceleration)
}