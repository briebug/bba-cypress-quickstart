# As a logged in user, I should be able to navigate to the courses page
# I should see a list of courses
# I should be able to create a course
# I should be able to select a course
# I should be able to update a course
# I should be able to delete a course
# I should be able to cancel and clear the course form

Feature: Courses

  As an autheticated user
  I need to be able to work with courses

  @focus
  Scenario: Navigate to courses
    Given I am on the home page
    And I navigate to the "courses" page
    Then I should see "courses" in the URL
