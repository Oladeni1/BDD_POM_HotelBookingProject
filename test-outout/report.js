$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/HotelBooking.feature");
formatter.feature({
  "line": 2,
  "name": "Hotel booking website",
  "description": "",
  "id": "hotel-booking-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Hotel"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Access to hotel reservation booking page",
  "description": "",
  "id": "hotel-booking-website;access-to-hotel-reservation-booking-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on hotel booking website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see the page title",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelBookingStepDef.i_am_on_hotel_booking_website()"
});
formatter.result({
  "duration": 26246688799,
  "status": "passed"
});
formatter.match({
  "location": "HotelBookingStepDef.i_should_see_the_page_title()"
});
formatter.result({
  "duration": 144197901,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Populating customer details save and delete record",
  "description": "",
  "id": "hotel-booking-website;populating-customer-details-save-and-delete-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I enter firstname as \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter surname as \"\u003cSurname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter price as \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter checkin as \"\u003cCheckin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter checkout as \"\u003cCheckout\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I scroll the page down",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click save button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should delete the captured customer details on the display",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "hotel-booking-website;populating-customer-details-save-and-delete-record;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Price",
        "Checkin",
        "Checkout"
      ],
      "line": 20,
      "id": "hotel-booking-website;populating-customer-details-save-and-delete-record;;1"
    },
    {
      "cells": [
        "Ola",
        "Manchester",
        "100",
        "2020-01-14",
        "2020-01-25"
      ],
      "line": 21,
      "id": "hotel-booking-website;populating-customer-details-save-and-delete-record;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Populating customer details save and delete record",
  "description": "",
  "id": "hotel-booking-website;populating-customer-details-save-and-delete-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Hotel"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter firstname as \"Ola\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter surname as \"Manchester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter price as \"100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter checkin as \"2020-01-14\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter checkout as \"2020-01-25\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I scroll the page down",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click save button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should delete the captured customer details on the display",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Ola",
      "offset": 22
    }
  ],
  "location": "HotelBookingStepDef.i_enter_firstname_as(String)"
});
formatter.result({
  "duration": 279819900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 20
    }
  ],
  "location": "HotelBookingStepDef.i_enter_surname_as(String)"
});
formatter.result({
  "duration": 295962800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 18
    }
  ],
  "location": "HotelBookingStepDef.i_enter_price_as(String)"
});
formatter.result({
  "duration": 149993900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-01-14",
      "offset": 20
    }
  ],
  "location": "HotelBookingStepDef.i_enter_checkin_as(String)"
});
formatter.result({
  "duration": 744015800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-01-25",
      "offset": 21
    }
  ],
  "location": "HotelBookingStepDef.i_enter_checkout_as(String)"
});
formatter.result({
  "duration": 454369400,
  "status": "passed"
});
formatter.match({
  "location": "HotelBookingStepDef.i_scroll_the_page_down()"
});
formatter.result({
  "duration": 31048600,
  "status": "passed"
});
formatter.match({
  "location": "HotelBookingStepDef.i_click_save_button()"
});
formatter.result({
  "duration": 1126538301,
  "status": "passed"
});
formatter.match({
  "location": "HotelBookingStepDef.i_should_delete_the_captured_customer_details_on_the_display()"
});
formatter.result({
  "duration": 4353668800,
  "status": "passed"
});
formatter.match({
  "location": "HotelBookingStepDef.i_close_the_browser()"
});
formatter.result({
  "duration": 4422851600,
  "status": "passed"
});
});