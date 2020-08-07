const add = (a, b) => a + b;

const sum = (values) => {
  let total = 0;
  for (let i = 0; i < values.length; i += 1) {
    total = add(total, values[i]);
  }
  return total;
};

export const average = (values) => sum(values) / values.length;

const squaredDifference = (values) => {
  const avg = average(values);
  return values.map((value) => (value - avg) ** 2);
};

export const variance = (values) => sum(squaredDifference(values));
