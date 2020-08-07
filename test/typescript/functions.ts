const add = <T extends number>(a: T, b: T): number => a + b;

const sum = (values: number[]): number => {
  let total = 0;
  for (let i = 0; i < values.length; i += 1) {
    total = add(total, values[i]);
  }
  return total;
};

export const average = (values: number[]): number => sum(values) / values.length;

const squaredDifference = (values: number[]): number[] => {
  const avg = average(values);
  return values.map((value) => (value - avg) ** 2);
};

export const variance = (values: number[]): number => sum(squaredDifference(values));
