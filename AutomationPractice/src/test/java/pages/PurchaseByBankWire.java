package pages;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import common.Driver;

public class PurchaseByBankWire extends Driver{

	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver","/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/browser/chromedriver");
		driver = new ChromeDriver();
	}
	
	public void openURL() throws InterruptedException {
		driver.get("http://automationpractice.com");
		Thread.sleep(2000);
	}
	
	public void scrollDown() {
		
		WebElement webElement = driver.findElement(By.className("homefeatured"));

		for (int i = 0; i < 10; i++) {
			webElement.sendKeys(Keys.ARROW_DOWN);
		}
	}
	
	public void addToCart() {
		
		WebElement we = driver.findElement(By.className("product-container")).findElement(By.linkText("Add to cart"));
		we.click();
		driver.findElement(By.name("Submit")).click();

	}
	
	public void pressProceedToCheckout() {
		WebElement we = driver.findElement(By.className("clearfix")).findElement(By.partialLinkText("Proceed"));
		we.click();
//		alert.findElement(By.className("icon-chevron-right right")).click();
	}
	
	public void checkTotalCostIsDisplayed() {
		if(driver.findElement(By.className("cart_total_price")).isDisplayed()) {
			System.out.println("Total price is displayed");
		} else {
			System.out.println("Total price is NOT displayed");
		}
	}
	
	public void pressCheckout() {
		driver.findElement(By.className("button btn btn-default standard-checkout button-medium")).click();
	}
	
	public void typeCredentials() {
		driver.findElement(By.name("email")).sendKeys(EMAIL);
		driver.findElement(By.name("passwd")).sendKeys(PASS);
	}
	
	public void pressSignIn() {
		
	}
	
	public void checkAdressessIsDisplayed() {
		
	}
	
	public void pressProcessAddress() {
		
	}
	
	public void acceptTerms() {
		
	}
	
	public void pressProcessCarrier() {
		
	}
	
	public void selectPayByBank() {
		
	}
	
	public void checkOrderSumaryIsDisplayed() {
		
	}
	
	public void confirmOrder() {
		
	}
	
	public void checkOrderConfirmationIsDisplayed() {
		
	}
	
	public void closeBrowser() {
		
	}
}
