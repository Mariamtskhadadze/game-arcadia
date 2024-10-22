export const range = (min: number, max: number, step: number = 1) => {
  const numbers = [];
  for (let i = min; i <= max; i+=step) {
    numbers.push(i);
  }
  return numbers;
};