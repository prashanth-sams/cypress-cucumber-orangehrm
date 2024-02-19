import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login_page";


Then("I login {string} portal", (portal: string) => {
  LoginPage.validateLogin();
});

Given ("I am on the {string} portal", (portal: string) => {
  LoginPage.visit(portal);
});
