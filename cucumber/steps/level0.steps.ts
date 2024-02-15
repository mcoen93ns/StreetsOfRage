import { loadFeature, defineFeature } from "jest-cucumber";
import { getActions } from "../../src/getActions";

const feature = loadFeature("./cucumber/features/level0.feature");

defineFeature(feature, (test) => {
  test("Walk through level 0 in three steps", ({
    given,
    when,
    then,
    and
  }) => {
    let vigilanteHealth: number;
    let level: [number, number][];
    let actions: string;

    given('a vigilante with a health of 10', () => {
      vigilanteHealth = 10;
    });

    and('the level has three empty tiles', () => {
      level = [[0, 0], [0, 0], [0, 0]];
    })

    when('the level is played', () => {
      actions = getActions(vigilanteHealth, level);
    });

    then('the user reaches the end in three steps', () => {
      expect(actions).toHaveLength(3);
    });
  });
});
