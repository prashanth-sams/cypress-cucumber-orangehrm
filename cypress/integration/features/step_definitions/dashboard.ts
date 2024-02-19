import { Then } from "@badeball/cypress-cucumber-preprocessor";

import * as CommonPage from "../pages/common_page";


Then ("I navigate to the {string} page", (page: string) => {
  cy.xpath(CommonPage.MENU_LINK).contains(page).click();

});

