import calculateMean from "./mean"

export const statisticalMean = (values: number[]): number => {
  console.log("IM THE STATISTICS PACKAGE")
  return calculateMean(values)
}