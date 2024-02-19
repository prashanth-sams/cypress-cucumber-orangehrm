import SabbFixture from '../../../fixtures/data.json';
import { Then } from "@badeball/cypress-cucumber-preprocessor";

import * as InfoPage from '../pages/info_page';


Then ("I should be able to verify and update the Date of Birth field", () => {
    /**
     * Modify and validate the Date of Birth field
     */
    cy.xpath(InfoPage.DATE_OF_BIRTH).should('be.visible');
    cy.xpath(InfoPage.DATE_OF_BIRTH).clear();
    cy.xpath(InfoPage.DATE_OF_BIRTH).type(SabbFixture.dob);
    cy.xpath(InfoPage.PERSONAL_DETAILS_SAVE_BUTTON).click();
    cy.xpath(InfoPage.DATE_OF_BIRTH).should('have.value', SabbFixture.dob);
});

