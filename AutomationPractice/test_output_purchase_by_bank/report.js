$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/features/purchaseByBankWire.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase By Bank Wire",
  "description": "",
  "id": "purchase-by-bank-wire",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Purchase garment while the client is logged at automationpractice.",
  "description": "",
  "id": "purchase-by-bank-wire;purchase-garment-while-the-client-is-logged-at-automationpractice.",
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
  "name": "scroll down",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "press \u0027Add to cart\u0027 button under the garment",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press \u0027Proceed to checkout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the page displays the total cost of the garments",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "press \u0027Checkout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "type the credentials",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "press \u0027Sign in\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the page displays addresses",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press \u0027Process Address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "accept the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "press \u0027Process Carrier\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select \u0027Pay by bank wire\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the page displays the order summary",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "confirm the order",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the page displays the order confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.a_client_launched_Google_Chrome()"
});
formatter.result({
  "duration": 999375586,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.open_automationpractice_page()"
});
formatter.result({
  "duration": 5785567208,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.scroll_down()"
});
formatter.result({
  "duration": 219349556,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.press_Add_to_cart_button_under_the_garment()"
});
formatter.result({
  "duration": 1314348832,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.press_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 36386975,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"partial link text\",\"selector\":\"Proceed\"}\n  (Session info: chrome\u003d72.0.3626.81)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dLinux 4.15.0-118-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ts4\u0027, ip: \u002710.100.12.17\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-118-generic\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /tmp/.com.google.Chrome.XdLsbH}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:41625}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.81, webStorageEnabled: true}\nSession ID: d969a08755a33bca5dbcb41ffd2606eb\n*** Element info: {Using\u003dpartial link text, value\u003dProceed}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:185)\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementByPartialLinkText(RemoteWebElement.java:269)\n\tat org.openqa.selenium.By$ByPartialLinkText.findElement(By.java:250)\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:181)\n\tat pages.PurchaseByBankWire.pressProceedToCheckout(PurchaseByBankWire.java:48)\n\tat stepDefinitionPurchaseByBankWire.StepDefinitionPurchaseByBankWire.press_Proceed_to_checkout_button(StepDefinitionPurchaseByBankWire.java:40)\n\tat ✽.And press \u0027Proceed to checkout\u0027 button(/home/jdrodriguez/JuanDavid/Choucair_prueba_tecnica/AutomationPractice/src/test/resources/features/purchaseByBankWire.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.the_page_displays_the_total_cost_of_the_garments()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.press_Checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.type_the_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.press_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.the_page_displays_addresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.press_Process_Address_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.accept_the_terms_of_service()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.press_Process_Carrier_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.select_Pay_by_bank_wire_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.the_page_displays_the_order_summary()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.confirm_the_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.the_page_displays_the_order_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionPurchaseByBankWire.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});