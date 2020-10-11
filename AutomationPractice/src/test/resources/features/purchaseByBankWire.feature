Feature: Purchase By Bank Wire

Scenario: Purchase garment while the client is logged at automationpractice.

Given A client launched Google Chrome
When open automationpractice page 
Then scroll down
And press 'Add to cart' button under the garment 
And press 'Proceed to checkout' button
And the page displays the total cost of the garments
And press 'Checkout' button
And type the credentials
And press 'Sign in' button
And the page displays addresses
And press 'Process Address' button
And accept the terms of service
And press 'Process Carrier' button
And select 'Pay by bank wire' button
And the page displays the order summary
And confirm the order
And the page displays the order confirmation
And close browser