package stepDefinitionPurchaseByBankWire;

import java.awt.AWTException;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.PurchaseByBankWire;

public class StepDefinitionPurchaseByBankWire {

	PurchaseByBankWire wire = new PurchaseByBankWire();
	
	@Given("^A client launched Google Chrome$")
	public void a_client_launched_Google_Chrome() {
	    wire.launchBrowser();
	}

	@When("^open automationpractice page$")
	public void open_automationpractice_page() throws InterruptedException {
		wire.openURL();
	}

	@Then("^scroll down$")
	public void scroll_down() {
	    try {
			wire.scrollDown();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Then("^press 'Add to cart' button under the garment$")
	public void press_Add_to_cart_button_under_the_garment() {
	    wire.addToCart();
	}

	@Then("^press 'Proceed to checkout' button$")
	public void press_Proceed_to_checkout_button() {
	    wire.pressProceedToCheckout();
	}

	@Then("^the page displays the total cost of the garments$")
	public void the_page_displays_the_total_cost_of_the_garments() {
	    wire.checkAdressessIsDisplayed();
	}

	@Then("^press 'Checkout' button$")
	public void press_Checkout_button() {
	    wire.pressCheckout();
	}

	@Then("^type the credentials$")
	public void type_the_credentials() {
	    System.out.println("Hola");
	}

	@Then("^press 'Sign in' button$")
	public void press_Sign_in_button()  {
	    System.out.println("Hola");

	}

	@Then("^the page displays addresses$")
	public void the_page_displays_addresses()  {
	    System.out.println("Hola");

	}

	@Then("^press 'Process Address' button$")
	public void press_Process_Address_button() {
	    System.out.println("Hola");

	}

	@Then("^accept the terms of service$")
	public void accept_the_terms_of_service() {
	    System.out.println("Hola");

	}

	@Then("^press 'Process Carrier' button$")
	public void press_Process_Carrier_button()  {
	    System.out.println("Hola");

	}

	@Then("^select 'Pay by bank wire' button$")
	public void select_Pay_by_bank_wire_button()  {
	    System.out.println("Hola");

	}

	@Then("^the page displays the order summary$")
	public void the_page_displays_the_order_summary()  {
	    System.out.println("Hola");

	}

	@Then("^confirm the order$")
	public void confirm_the_order()  {
	    System.out.println("Hola");

	}

	@Then("^the page displays the order confirmation$")
	public void the_page_displays_the_order_confirmation() throws Throwable {
	    System.out.println("Hola");

	}

	@Then("^close browser$")
	public void close_browser() {
	    System.out.println("Hola");

	}
	
}
