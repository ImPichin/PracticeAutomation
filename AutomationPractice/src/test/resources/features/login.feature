Feature: Login

Scenario: Login with specific credentials at automationpractice page.

Given A client launched Google Chrome
When open automationpractice page 
Then press 'Sign in' option 
And type the credentials
And press 'Sign in' button
And displayed 'My Account' page
And close browser