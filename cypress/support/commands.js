Cypress.Commands.add('tabsA11yIntial', (destination) => {
    cy.visit('/' + destination)

    cy.get('[data-cy="tab-list"] > button').then(($tab_list) => {

        cy.wrap($tab_list)
        .first()
        .should('have.attr', 'aria-selected', 'true')
        .and('have.attr', 'tabIndex', 0)
        .siblings()
        .each(tab => {
            cy.wrap(tab)
            .should('have.attr', 'aria-selected', 'false')
            .and('have.attr', 'tabIndex', -1)
        })
    })

    cy.get('[data-cy="tab-panel"]').then(($tab_panels) => {

        cy.wrap($tab_panels)
        .first()
        .should('is.visible')
        .and('not.have.attr', 'hidden')

        cy.wrap($tab_panels)
          .first()
          .nextAll()
          .each(panel => {
            cy.wrap(panel)
            .should('not.is.visible')
            .and('have.attr', 'hidden')
          })
    })
  })