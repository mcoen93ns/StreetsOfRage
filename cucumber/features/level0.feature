Feature: Walk through level 0
  As a vigilante I want to walk through an empty level with a health of 10 reaching the end in three steps 

Scenario: Walk through level 0 in three steps
	Given a vigilante with a health of 10
	And the level has three empty tiles
	When the level is played
	Then the user reaches the end in three steps