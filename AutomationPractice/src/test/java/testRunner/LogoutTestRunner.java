package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/features/logout.feature",
		glue = {"stepDefinitionLogout"},
		format = {"pretty", "html:test_output_logout", "json:json_output_logout/cucumber.json", "junit:junit_xml_logout/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class LogoutTestRunner {

}