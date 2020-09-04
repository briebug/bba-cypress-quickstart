# I should be able to logout
# I should not be able to see the sidenav
# I should not be able to see the login button
# I should be able to login and see the home page

# TODO: I should see an error message on failed login

Feature: Logging In
  I need to be able to log in

  Scenario: Login as an admin
    Given I am on the login page
    When I login as an "admin"
    Then I should be on the home page
