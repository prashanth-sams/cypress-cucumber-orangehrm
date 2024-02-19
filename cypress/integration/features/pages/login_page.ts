export const USERNAME = '[name="username"]';
export const PASSWORD = '[name="password"]';
export const LOGIN = '[type="submit"]';
import Fixture from '../../../fixtures/data.json';


class LoginPage {
  
  /**
   * Visit the login page and validate the title
   */
  static visit(title: string) {
    cy.visit('/');
    cy.url().should("include", "orangehrmlive");
    cy.title().should("include", Fixture.title);
  }

  /**
   * Validate login with valid credentials
   */
  static validateLogin() {
    cy.get(USERNAME).type(Fixture.login.username);
    cy.get(PASSWORD).type(Fixture.login.password);
    cy.get(LOGIN).click();
    cy.url().should("include", "dashboard");
  }

}

export default LoginPage;
