- Start new game with vigilante which has a health parameter
    - For example, 10
- Move vigilante from left to right
    - '-': move
    - Concept of a tile, e.g. [[0,0]] or [] for an empty tile
- Being able to move left to right until you reach the end of the level (which is a sequence of tiles)
    - [[0,0], [0,0], [0,0]]

E2E test:
Input: new game with a health parameter of 10 and a level which consists of [[0,0], [0,0], [0,0]]
Output: '---' 

-- To be defined how to go ahead with the attack
- Perform attack
    - 'B': execute your regular attack
    - 'C': execute your special attack
    - 'A': execute your critical attack
