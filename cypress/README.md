
==============
INTRO


I have decided to use Cypress to do this exercise. I have had some experience with it a few years ago when choosing the technology for my current project. I have tested it with chrome on my current MAC.
In my day to day I develop with WebdriverIO with Selenium (and typescript). 

I have decided to use Cypress for this project because this tool makes it easier than WDIO for sharing and running as WDIO dependencies have to be installed for it to run. 

The code can be found under : ensek/cypress/e2e/

==============
PAGE OBJECT MODEL


I have implemented the tests for the login page and other pages. I have tried implementing the Page Object Model method, having:

- Page folder: This will interact with the pages directly i.e. locator to the buy button or the quantity field. It makes it easier to have a function which I can call instead of repeating the same code across the different test files. I have access the locators using the table object, and using column and row. Ideally, this would not be this way, each field / button would be given a unique id or data-qa-id. In this case the ids are repeated so it's not as easy to access them. Hence why I have taken this approach 

- Tests folder: Here is where the cy files are. They use the page files and also perform the comparisons with expected values / errors. 

==============
SELENIUM – GHERKIN


If I was running this in WebdriverIO with Cucumber, then there would be an extra folder called "feature". Here is where the Gherkin files would exist, i.e

Feature: Buy gas
    As a client
    I want to be able to buy Gas and be informed how many units are left

  Background:
      Given a client navigates to the buy page

    Scenario: A user can buy 5 litres of Gas
        When the user inserts 5 litres of Gas
        And clicks on buy gas
        Then a message indicating that they have bought 5 litres of Gas and there amount of gas remaining

    Scenario: A user cant buy abc litres of Gas
        When the user inserts abc litres of Gas
        And clicks on buy gas
        Then a message indicating that there has been an error is displayed

'
The idea would be similar to the one implemented here, a "pageobject" folder for interacting with the different ids and also a "test" folder where the tests would reside, these tests would have some Given-when-then functions that would match the feature files content.
