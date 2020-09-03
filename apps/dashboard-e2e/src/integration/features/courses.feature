Feature: Courses

  As an autheticated user
  I need to be able to work with courses

  @focus
  Scenario: Navigate to courses
    Given I am on the home page
    And I navigate to the "courses" page
    Then I should see "courses" in the URL
