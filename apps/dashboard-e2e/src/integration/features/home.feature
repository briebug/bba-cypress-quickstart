# As a logged in user, I should see the home page
# I should see a list of available courses
# I should see a list of available lessons for each course

Feature: Courses

  As an autheticated user
  I need to be able to work from the home page

  @focus
  Scenario: See home page on load
    Given I have opened the application
    Then I should be on the home page
