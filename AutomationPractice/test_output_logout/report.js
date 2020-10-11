$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/features/logout.feature");
formatter.feature({
  "line": 1,
  "name": "Logout",
  "description": "",
  "id": "logout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Logout of an test account at automationpractice page.",
  "description": "",
  "id": "logout;logout-of-an-test-account-at-automationpractice-page.",
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
  "name": "logout of it.",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "displayed \u0027Authentication\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionLogout.a_client_launched_Google_Chrome()"
});
formatter.result({
  "duration": 954420157,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogout.open_automationpractice_page()"
});
formatter.result({
  "duration": 6041258004,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogout.press_Sign_in_option()"
});
formatter.result({
  "duration": 2501971101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogout.type_the_credentials()"
});
formatter.result({
  "duration": 149929600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogout.press_Sign_in_button()"
});
formatter.result({
  "duration": 1712020880,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogout.displayed_My_Account_page()"
});
formatter.result({
  "duration": 5226834,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogout.logout_of_it()"
});
formatter.result({
  "duration": 2099687944,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogout.displayed_Authentication_page()"
});
formatter.result({
  "duration": 4568208,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogout.close_browser()"
});
formatter.result({
  "duration": 68027489,
  "status": "passed"
});
});