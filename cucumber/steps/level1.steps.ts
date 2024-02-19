// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { getActions } from "../../src/getActions";

const feature = loadFeature("./cucumber/features/level1.feature");

defineFeature(feature, (test) => {
  test("Walk through level 1 in three steps", ({ given, when, then, and }) => {
    let vigilanteHealth: number;
    let level: [number, number][];
    let actions: string;

    given("a vigilante with a health of 10", () => {
      vigilanteHealth = 10;
    });

    and("the level has three tiles", () => {
      level = [
        [0, 0],
        [0, 0],
        [0, 0],
      ];
    });

    and("each tile has an enemy with a health of 2", () => {});

    and("an attack of 2", () => {});

    when("the level is played", () => {
      actions = getActions(vigilanteHealth, level);
    });

    then("the vigilante reaches the end in three steps ", () => {
      expect(actions).toHaveLength(3);
    });
  });
});
