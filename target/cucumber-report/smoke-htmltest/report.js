$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/hotelBooking.feature");
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
  "name": "Hotel reservation booking",
  "description": "",
  "id": "hotel-booking-website;hotel-reservation-booking",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "Populating customer details",
  "description": "",
  "id": "hotel-booking-website;populating-customer-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I enter the following customer details",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Price",
        "Check-in",
        "Check-out"
      ],
      "line": 10
    },
    {
      "cells": [
        "Ola",
        "Oladeni",
        "100",
        "2020-01-14",
        "2020-01-14"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the captured customer details on display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});