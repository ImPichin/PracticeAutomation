package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/features/purchaseByBankWire.feature",
		glue = {"stepDefinitionPurchaseByBankWire"},
		format = {"pretty", "html:test_output_purchase_by_bank", "json:json_output_purchase_by_bank/cucumber.json", "junit:junit_xml_purchase_by_bank/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class PurchaseByBankWireRunner {

}
