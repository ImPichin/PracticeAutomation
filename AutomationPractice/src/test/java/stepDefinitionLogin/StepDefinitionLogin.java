package stepDefinitionLogin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.Login;

public class StepDefinitionLogin {
	
	Login login = new Login();
	
	@Given("^A client launched Google Chrome$")
	public void a_client_launched_Google_Chrome() {
	    login.launchBrowser();
	}

	@When("^open automationpractice page$")
	public void open_automationpractice_page() throws InterruptedException {
		login.openURL();
	}

	@Then("^press 'Sign in' option$")
	public void press_Sign_in_option() {
	    login.pressLoginButton();
	}

	@Then("^type the credentials$")
	public void type_the_credentials() {
	    login.typeCredentials();
	}

	@Then("^press 'Sign in' button$")
	public void press_Sign_in_button() {
	    login.pressSignInButton();
	}

	@Then("^displayed 'My Account' page$")
	public void displayed_My_Account_page() {
	    login.checkMyAccountIsDisplayed();
	}
	
	@Then("^close browser$")
	public void close_browser() {
	    login.closeTheBrowser();
	}

}
