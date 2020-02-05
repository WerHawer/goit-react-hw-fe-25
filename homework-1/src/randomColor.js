export function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}
