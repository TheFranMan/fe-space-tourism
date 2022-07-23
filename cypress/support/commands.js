Cypress.Commands.add('tabsA11yIntial', (url) => {
    cy.visit('/' + url)

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


  Cypress.Commands.add('canDisplayPanel', (url) => {
    cy.visit('/' + url)

    cy.get('[data-cy="tab-list"] > button').then($tab_list => {
        cy.wrap($tab_list)
          .first()
          .click()
          .should('have.attr', 'aria-selected', 'true')
          .and('have.attr', 'tabIndex', 0)
          .siblings()
          .each(tab => {
            cy.wrap(tab)
              .should('have.attr', 'aria-selected', 'false')
              .and('have.attr', 'tabIndex', -1)
          })

        cy.get('[data-cy="tab-panel"]').as('tab_panels')

        cy.get('@tab_panels')
          .first()
          .should('is.visible')
          .and('not.have.attr', 'hidden')

         cy.get('@tab_panels')
           .first()
           .siblings('[data-cy="tab-panel"]')
           .each(panel => {
            cy.wrap(panel)
              .should('not.is.visible')
              .and('have.attr', 'hidden')
           })
    })
  })