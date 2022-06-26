describe('Clicking on a link redirects to the correct page', () => {
    it('Can visit home page by clicking logo', () => {
        cy.visit('/')

        cy.get('.header__logo').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })

    it('Can visit home page', () => {
        cy.visit('/')

        cy.get('.nav__list li a')
          .contains('home', {matchCase: false})
          .click()

        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })

    it('Can visit destination page', () => {
        cy.visit('/')

        cy.get('.nav__list li a')
        .contains('destination', {matchCase: false})
        .click()

        cy.url().should('include', 'destination')
        cy.contains('pick your destination', {matchCase: false})
    })

    it('Can visit crew page', () => {
        cy.visit('/')

        cy.get('.nav__list li a')
          .contains('crew', {matchCase: false})
          .click()

        cy.url().should('include', 'crew')
        cy.contains('meet your crew', {matchCase: false})
    })

    it('Can visit technology page', () => {
        cy.visit('/')

        cy.get('.nav__list li a')
          .contains('technology', {matchCase: false})
          .click()

        cy.url().should('include', 'technology')
        cy.contains('SPACE LAUNCH 101', {matchCase: false})
    })

    it('Explore link on the home page brings us to the destination page', () => {
        cy.visit('/')

        cy.get('.home__explore').click()
        cy.url().should('include', 'destination')
    })

    it('The current page menu item is highlighted and aria set', () => {
        cy.visit('/')

        cy.get('.nav__list li a')
          .contains('destination', {matchCase: false})
          .click()
          .should('have.attr', 'aria-current', 'page')

          cy.get('.nav__list li a')
          .contains('home', {matchCase: false})
          .should('not.have.attr', 'aria-current')

          cy.get('.nav__list li a')
          .contains('crew', {matchCase: false})
          .should('not.have.attr', 'aria-current')

          cy.get('.nav__list li a')
          .contains('technology', {matchCase: false})
          .should('not.have.attr', 'aria-current')
    })
})