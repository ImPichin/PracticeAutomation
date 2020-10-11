$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with specific credentials at automationpractice page.",
  "description": "",
  "id": "login;login-with-specific-credentials-at-automationpractice-page.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "A client launched Google Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "open automationpractice page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "press \u0027Sign in\u0027 option",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "type the credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press \u0027Sign in\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "displayed \u0027My Account\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionLogin.a_client_launched_Google_Chrome()"
});
formatter.result({
  "duration": 1005279153,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.open_automationpractice_page()"
});
formatter.result({
  "duration": 5656181007,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.press_Sign_in_option()"
});
formatter.result({
  "duration": 1207912116,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.type_the_credentials()"
});
formatter.result({
  "duration": 161857923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.press_Sign_in_button()"
});
formatter.result({
  "duration": 1712726974,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.displayed_My_Account_page()"
});
formatter.result({
  "duration": 7014193,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.close_browser()"
});
formatter.result({
  "duration": 67463386,
  "status": "passed"
});
});