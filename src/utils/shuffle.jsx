export default function shuffle(array) {
  return array
    .map((item) => [Math.random(), item])
    .sort(([a], [b]) => a - b)
    .map(([, item]) => item);
}
