export const MENU_LINK = '//span[contains(@class,"oxd-main-menu")]';
export const HEADER = '//h6[contains(@class,"topbar-header")]';
export const PROFILE_DROPDOWN = '.oxd-userdropdown-icon';
export const PROFILE_MENU = 'a.oxd-userdropdown-link';


class CommonPage {

  /**
   * logout from the application
   */
  static logout() {
    cy.get(PROFILE_DROPDOWN).click();
    cy.get(PROFILE_MENU).contains('Logout').click();
  }
  
}

export default CommonPage;