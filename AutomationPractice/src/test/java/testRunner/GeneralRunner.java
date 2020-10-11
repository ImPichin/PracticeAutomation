package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/features/",
		glue = {"stepDefinition"},
		format = {"pretty", "html:test_output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)


public class GeneralRunner {

}
