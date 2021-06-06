const numbers = [11, 12, 13, 14, 515, 6];
function swap(arr) {
  const [start, ...rest] = arr;
  return [...rest, start];
}
console.log(swap(numbers));
