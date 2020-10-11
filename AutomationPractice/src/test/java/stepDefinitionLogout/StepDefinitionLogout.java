package stepDefinitionLogout;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.Login;
import pages.Logout;

public class StepDefinitionLogout {
	
	Logout logout = new Logout();

	@Given("^A client launched Google Chrome$")
	public void a_client_launched_Google_Chrome() {
	    logout.launchBrowser();
	}

	@When("^open automationpractice page$")
	public void open_automationpractice_page() throws InterruptedException {
		logout.openURL();
	}

	@Then("^press 'Sign in' option$")
	public void press_Sign_in_option() {
	    logout.pressLoginButton();
	}

	@Then("^type the credentials$")
	public void type_the_credentials() {
	    logout.typeCredentials();
	}

	@Then("^press 'Sign in' button$")
	public void press_Sign_in_button() {
	    logout.pressSignInButton();
	}

	@Then("^displayed 'My Account' page$")
	public void displayed_My_Account_page() {
	    logout.checkMyAccountIsDisplayed();
	}

	@Then("^logout of it\\.$")
	public void logout_of_it() {
	    logout.pressSignOutButton();
	}

	@Then("^displayed 'Authentication' page$")
	public void displayed_Authentication_page() throws Throwable {
		logout.checkAuthenticationIsDisplayed();
	}

	@Then("^close browser$")
	public void close_browser() {
	    logout.closeTheBrowser();
	}
	
}
