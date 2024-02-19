import { getActions } from "../../src/getActions";
import { emptyTile } from "../doubles/tiles";

describe("This is a function that shows the actions that need to be taken by a vigilante to complete a level of Streets of Rage", () => {
  describe("We start with a very boring level, without any enemies", () => {
    it("When the vigilante is in an empty void, no actions need to be taken.", () => {
      expect(getActions(1, [])).toEqual("");
    });
    it("When the level contains only one tile, the vigilante needs to take 1 step.", () => {
      expect(getActions(1, [emptyTile])).toEqual("-");
    });
    it("When the level contains five empty tiles, the vigilante needs to take 5 steps.", () => {
      expect(
        getActions(1, [emptyTile, emptyTile, emptyTile, emptyTile, emptyTile])
      ).toEqual("-----");
    });
  });
  describe('Sample tests', () => { 
    it('Short waves', () => {  
      act(10, [[2, 2], [2, 2], [2, 2]]);
    });
});

