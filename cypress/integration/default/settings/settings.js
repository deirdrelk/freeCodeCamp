describe('Settings', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should be possible to reset your progress', () => {
    cy.visit('/settings');
    cy.contains('Reset all of my progress').click();
    cy.contains('Reset everything. I want to start from the beginning').click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/');
    });
    cy.contains('Your progress has been reset');
  });

  // New Test: it should download a json file with the username of developmentuser
  it('should be possible to download user information', () => {
    cy.visit('/settings');
    // When clicking this button
    const element = 'download-data';
    const button = `[data-cy="${element}"]`;
    // This should hvae the href attribute to ensure download
    cy.get(button).should('have.attr', 'href');
    // When it's clicked, the download attribute should equal the developmentuser's json file
    cy.get(button)
      .click()
      .should('have.attr', 'download')
      .and('equals', 'developmentuser.json');
  });
});
