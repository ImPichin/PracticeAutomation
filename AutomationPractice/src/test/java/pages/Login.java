package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import common.Driver;

public class Login extends Driver{
	

	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver","/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/browser/chromedriver");
		driver = new ChromeDriver();
	}
	
	public void openURL() throws InterruptedException {
		driver.get("http://automationpractice.com");
		Thread.sleep(2000);
	}
	
	public void pressLoginButton() {
		driver.findElement(By.className("header_user_info")).click();
	}
	
	public void typeCredentials() {
		driver.findElement(By.name("email")).sendKeys(EMAIL);
		driver.findElement(By.name("passwd")).sendKeys(PASS);
	}
	
	public void pressSignInButton() {
		driver.findElement(By.name("SubmitLogin")).click();
	}
	
	public void checkMyAccountIsDisplayed() {
		String URL = driver.getCurrentUrl();
		Assert.assertEquals(URL, "http://automationpractice.com/index.php?controller=my-account" );
	}
	
	public void closeTheBrowser() {
		driver.quit();
	}
	
	
	
}
