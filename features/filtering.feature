Feature: Filtering

  Test Features and Folders filtering

  Scenario: Filtering Positive Test
  
    Given I have opened LivingDoc
    When I click on the "Demo" folder
    Then "Demo" folder should be displayed
    Then "Filtering" folder should be displayed
    Then "Tree" folder should be displayed

    When I enter "Positive" into filter input
    Then "Demo" folder should be displayed
    Then "Filtering" folder should be displayed
    Then "Tree" folder should not be displayed

    When I click on the clear filter input icon
    Then "Demo" folder should be displayed
    Then "Filtering" folder should be displayed
    Then "Tree" folder should be displayed
