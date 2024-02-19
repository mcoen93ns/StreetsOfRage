Feature: Walk through level 1
  As a vigilante I want to walk through a level with a wave of three weak enemies and survive

Scenario: Walk through level 1 in three steps
	Given a vigilante with a health of 10
	And the level has three tiles 
    And each tile has an enemy with a health of 2
    And an attack of 2
	When the level is played
	Then the vigilante reaches the end in three steps 