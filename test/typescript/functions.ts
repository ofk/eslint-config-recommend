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

export const omit = <T, K extends keyof T>(value: T, key: K): Omit<T, K> => {
  const { [key]: removeValue, ...restValue } = value;
  return restValue;
};

export const noop = (_value: never): void => {
  // do nothing
};

export const createCounter = (
  initialCount = 0,
): [getCount: () => number, setCount: (diff: number) => void] => {
  let count = initialCount;
  return [
    (): number => count,
    (diff): void => {
      count += diff;
    },
  ];
};

export const run = <T>(obj: T, fn: (obj: T) => void): void => {
  try {
    fn(obj);
  } catch (e: unknown) {
    console.error(e);
    throw e;
  }
};

export const loop = (fn: () => boolean | undefined): void => {
  while (true) {
    if (fn() === false) break;
  }
};
