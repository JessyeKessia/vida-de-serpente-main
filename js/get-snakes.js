export async function getSnakes() {
  const response = await fetch("../serpentes.json");
  const snakes = await response.json();
  return snakes;
}
