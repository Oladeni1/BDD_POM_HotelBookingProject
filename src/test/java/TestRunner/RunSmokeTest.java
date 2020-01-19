package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\java\\Features\\HotelBooking.feature",
        glue={"StepDefinition"},
        format= {"pretty","html:test-outout","html:target/cucumber.html.report","json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
        monochrome = false, //display the console output in a proper readable format
        strict = false, //it will check if any step is not defined in step definition file
        dryRun = false,//to check the mapping is proper between feature file and step def file
        tags = {"@Hotel"}
)

public class RunSmokeTest {
}

