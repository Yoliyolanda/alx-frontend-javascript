export default function returnHowManyArguments(...theArgs) {
  let total = 0;

  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
