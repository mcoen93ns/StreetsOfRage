Feature: Walk through level 1
  As a vigilante I want to walk through a level with 2 empty tiles and a wave of three weak enemies and survive

Scenario: Walk through level 1 in five steps
	Given a vigilante with a health of 10
	And the level has five tiles 
	And the first two tiles are empty
    And the last three tiles have an enemy with a health of 2
    And those enemies have an attack of 2
	When the level is played
	Then the vigilante reaches the end in five steps
	And the first two steps are do not attack
	And the last three steps are an attack