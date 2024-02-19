Feature: OrangeHRM Web Automation

  Background: Navigate to the OrangeHRM portal
    Given I am on the "Orange Hrm" portal
  
  @login
  Scenario: Registered user should be able to successfully login into the admin panel
    Then I login "Orange Hrm" portal
    Then I should be able to see the "Dashboard" page

  @info
  Scenario: User should be able to go to My Info page and verify and update their Date of Birth field.
    When I navigate to the "My Info" page
    Then I should be able to see the "My Info" page
    Then I should be able to verify and update the Date of Birth field
  
  @logout
  Scenario: User should be able to logout from the admin panel
    When I logout from the admin panel
    Then I should be able to see the "Login" page
