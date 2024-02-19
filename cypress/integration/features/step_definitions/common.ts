import { Before, After } from "@badeball/cypress-cucumber-preprocessor";
import { Then } from "@badeball/cypress-cucumber-preprocessor";
import Common from "../pages/common_page";

import * as CommonPage from "../pages/common_page";
import * as InfoPage from "../pages/info_page";
import * as LoginPage from "../pages/login_page";


Then ("I should be able to see the {string} page", (page: string) => {  

  /**
   * Validate pages on launch
   */
  if (page == "Dashboard") {
    cy.xpath(CommonPage.HEADER).should("contain", page);

  } else if (page == "My Info") {
    cy.xpath(CommonPage.HEADER).should("contain", "PIM");
    cy.xpath(InfoPage.PROFILE_IMAGE).should('be.visible');

  } else if (page == "Login") {
    cy.get(LoginPage.USERNAME).should('be.visible');
    cy.get(LoginPage.PASSWORD).should('be.visible');
    cy.get(LoginPage.LOGIN).should('be.visible');
  }

});

Then ("I logout from the admin panel", () => {
  Common.logout();
});

Before({ tags: "@info or @logout" }, () => {

  /**
   * Reuse the cookie from the previous session
   */
  cy.readFile('cypress/fixtures/cookie.txt').then((cookie) => {
    cy.setCookie('orangehrm', cookie);
  });

});


After({ tags: "@login" }, () => {

  /**
   * Save the cookie for the next session
   */
  cy.getCookies().then((cookies) => {

    cookies.forEach((element) => {
      if (element.name == 'orangehrm') {
        cy.writeFile('cypress/fixtures/cookie.txt', element.value);
      }
    }); 
  });
  
});
