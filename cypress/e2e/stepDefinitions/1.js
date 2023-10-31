import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {
  cy.visit("https://www.google.com/").screenshot();

});

When("I type in google and submit", () => {
    cy.visit(`https://www.google.com/`);
});

Then("I should be redirected to the board detail", () => {
    cy.visit("https://www.google.com/");
});