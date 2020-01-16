@Hotel
Feature: Hotel booking website

  Scenario: Access to hotel reservation booking page
    Given I am on hotel booking website
    Then I should see the page title

   Scenario Outline: Populating customer details save and delete record
     And I enter firstname as "<Firstname>"
     And I enter surname as "<Surname>"
     And I enter price as "<Price>"
     And I enter checkin as "<Checkin>"
     And I enter checkout as "<Checkout>"
     And I scroll the page down
     And I click save button
     Then I should delete the captured customer details on the display
     And I close the browser

    Examples:
      | Firstname | Surname    | Price | Checkin   | Checkout    |
      | Ola       | Manchester | 100   | 2020-01-14 | 2020-01-25 |
