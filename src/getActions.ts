export function getActions(
  vigilanteHealth: number,
  level: [number, number][]
): string {
  let actions = "";
  level.forEach(() => {
    actions += "-";
  });
  return actions;
}
