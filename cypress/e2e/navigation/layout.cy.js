describe('Main navigation layout', () => {
    it('[mobile] Nav menu is hidden and hamburger is visible', () => {
        cy.viewport('iphone-4')
        cy.visit('/')

        cy.get('.nav__btn')
          .should('be.visible')
          .children()
          .should('not.have.class', 'open')

        cy.get('.nav__list').should('not.have.class', 'open')
    })

    it('[mobile] Nav menu is opened when clicking on the hamburger', () => {
        cy.viewport('iphone-4')
        cy.visit('/')

        cy.get('.nav__btn')
          .click()
          .children()
          .should('have.class', 'open')

        cy.get('.nav__list').should('have.class', 'open')
    })

    it('[mobile] Nav menu is closed when clicking on the X icon', () => {
        cy.viewport('iphone-4')
        cy.visit('/')

        cy.get('.nav__btn')
          .click()
          .click()
          .children()
          .should('not.have.class', 'open')

        cy.get('.nav__list').should('not.have.class', 'open')
    })

    it('[tablet] Nav menu is fully open and hamburger is hidden', () => {
        cy.viewport('ipad-mini')
        cy.visit('/')

        cy.get('.nav__btn').should('not.be.visible')
        cy.get('.nav__list').should('be.visible')
    })
})