// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { getActions } from "../../src/getActions";

const feature = loadFeature("./cucumber/features/level1.feature");

defineFeature(feature, (test) => {
  test("Walk through level 1 in five steps", ({ given, when, then, and }) => {
    let vigilanteHealth: number;
    let level: [number, number][];
    let actions: string;

    given("a vigilante with a health of 10", () => {
      vigilanteHealth = 10;
    });

    and("the level has five tiles", () => {
      // TODO: Replace with a stub
      level = [];
    });

    and("the first two tiles are empty", () => {
      level.push([0, 0]);
      level.push([0, 0]);
    });

    and("the last three tiles have an enemy with a health of 2", () => {
      level.push([2, 0]);
      level.push([2, 0]);
      level.push([2, 0]);
    });

    and("those enemies have an attack of 2", () => {
      level[2][1] = 2;
      level[3][1] = 2;
      level[4][1] = 2;
    });

    when("the level is played", () => {
      actions = getActions(vigilanteHealth, level);
    });

    then("the vigilante reaches the end in five steps", () => {
      expect(actions).toHaveLength(5);
    });

    and("the first two steps are do not attack", () => {
      expect(actions.charAt(0)).toBe("-");
      expect(actions.charAt(1)).toBe("-");
    });

    and("the last three steps are an attack", () => {
      // TODO: replace with one of the allowed attacks instead of B
      expect(actions.charAt(2)).toBe("B");
      expect(actions.charAt(3)).toBe("B");
      expect(actions.charAt(4)).toBe("B");
    });
  });
});
