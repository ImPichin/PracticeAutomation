package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/features/login.feature",
		glue = {"stepDefinitionLogin"},
		format = {"pretty", "html:test_output_login", "json:json_output_login/cucumber.json", "junit:junit_xml_login/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class LoginTestRunner {

}
