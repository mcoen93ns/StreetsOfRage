Streets of Rage
Side-scrolling
Ex-police vigilantes
Fictional large American city
Crime syndicate

Kata: fight as one of our hearoes against a bunch of tugs

Task:
Initial health: positive integer
Level:
- array of 2-ples
- 2-ple: represents a tile in the level.
-- Example: [0, 0] --> empty
-- Example: [10, 10] --> enemy: health = 10 and attack power = 10

Input = fight(10, [[2, 4], [4, 6], [0, 0], [8, 10]])
With 10 being the health of your fighter. Level contains 3 enemies.

Output: string containing the actions required to beat the level
Should have at least one solution

List of actions:
- '-': dont attack
- B: regular attack
- C: special attack
- A: critical attack

Hero moves from left to right
If hero dies (health = 0) game is over

Waves of enemies, with at least three empty tiles in between the waves
