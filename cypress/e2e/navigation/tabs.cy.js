describe('can interact with tabs correctly', () => {
    it('tabs initally render with the correct a11y attributes set', () => {
        cy.visit('/destination')

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

    it('clicking on a tab displays the new tab panel', () => {
        cy.visit('/destination')

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
               .siblings('.destinations__tabs__panel')
               .each(panel => {
                cy.wrap(panel)
                  .should('not.is.visible')
                  .and('have.attr', 'hidden')
               })
        })
    })

    it('pressing left while on a tab focuses the tab to the left', () => {
        cy.visit('/destination')

        cy.get('[data-cy="tab-list"] > button').then($tab_list => {
            cy.wrap($tab_list)
              .eq(1)
              .click()
              .trigger('keydown', { keyCode: 37 })
              .prev()
              .should('have.focus')
        })
    })

    it('pressing right while on a tab focuses the tab to the right', () => {
        cy.visit('/destination')

        cy.get('[data-cy="tab-list"] > button').then($tab_list => {
            cy.wrap($tab_list)
              .eq(1)
              .click()
              .trigger('keydown', { keyCode: 39 })
              .next()
              .should('have.focus')
        })
    })

    it('pressing left on the first tab focuses on the last tab', () => {
        cy.visit('/destination')

        cy.get('[data-cy="tab-list"] > button').as('tabs')

        cy.get('@tabs').then($tab_list => {
            cy.wrap($tab_list)
              .first()
              .click()
              .trigger('keydown', { keyCode: 37 })
        })

        cy.get('@tabs').then($tab_list => {
            cy.wrap($tab_list)
              .last()
              .should('have.focus')
        })
    })

    it('pressing right on the last tab focuses on the first tab', () => {
        cy.visit('/destination')

        cy.get('[data-cy="tab-list"] > button').as('tabs')

        cy.get('@tabs').then($tab_list => {
            cy.wrap($tab_list)
              .last()
              .click()
              .trigger('keydown', { keyCode: 39 })
        })

        cy.get('@tabs').then($tab_list => {
            cy.wrap($tab_list)
              .first()
              .should('have.focus')
        })
    })
})