package StepDefinition;

import Pages.HotelBookingPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class HotelBookingStepDef {

    @Given("^I am on hotel booking website$")
    public void i_am_on_hotel_booking_website(){

        HotelBookingPage.launchBrowser();

    }

    @Then("^I should see the page title$")
    public void i_should_see_the_page_title(){

        HotelBookingPage.verifyHomePage();

    }
    @Given("^I enter firstname as \"([^\"]*)\"$")
    public void i_enter_firstname_as(String Firstname) {

           HotelBookingPage.enterFirstname(Firstname);

    }

    @Given("^I enter surname as \"([^\"]*)\"$")
    public void i_enter_surname_as(String Surname) {

        HotelBookingPage.enterSurname(Surname);

    }

    @Given("^I enter price as \"([^\"]*)\"$")
    public void i_enter_price_as(String Price){

        HotelBookingPage.enterPrice(Price);

    }

    @Given("^I enter checkin as \"([^\"]*)\"$")
    public void i_enter_checkin_as(String Checkin){

        HotelBookingPage.enterCheckin(Checkin);

    }

    @Given("^I enter checkout as \"([^\"]*)\"$")
    public void i_enter_checkout_as(String Checkout){

        HotelBookingPage.enterCheckout(Checkout);

    }

    @Given("^I click save button$")
    public void i_click_save_button(){

        HotelBookingPage.clickSave();

    }

    @Then("^I should delete the captured customer details on the display$")
    public void i_should_delete_the_captured_customer_details_on_the_display(){

        HotelBookingPage.clickDeleteButton();
    }
    @Then("^I close the browser$")
    public void i_close_the_browser(){

        HotelBookingPage.tearDown();

    }
    @And("^I scroll the page down$")
    public void i_scroll_the_page_down(){

        HotelBookingPage.scrollPage();

    }
}

