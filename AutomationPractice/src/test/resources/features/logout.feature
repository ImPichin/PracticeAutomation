Feature: Logout

Scenario: Logout of an test account at automationpractice page.

Given A client launched Google Chrome
When open automationpractice page 
Then press 'Sign in' option 
And type the credentials
And press 'Sign in' button
And displayed 'My Account' page
And logout of it.
And displayed 'Authentication' page
And close browser