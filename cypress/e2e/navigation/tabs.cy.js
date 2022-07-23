describe('can interact with tabs correctly', () => {
    it('tabs initally render with the correct a11y attributes set', () => {
        cy.tabsA11yIntial('destination')
        cy.tabsA11yIntial('crew')
        // cy.tabsA11yIntial('technology')
    })

    it('clicking on a tab displays the new tab panel', () => {
        cy.canDisplayPanel('destination')
        // cy.canDisplayPanel('crew')
        // cy.canDisplayPanel('technology')
    })

    it('pressing left while on a tab focuses the tab to the left', () => {
        cy.tabsCanGoLeft('destination')
        // cy.tabsCanGoLeft('crew')
        cy.tabsCanGoLeft('technology')
    })

    it('pressing right while on a tab focuses the tab to the right', () => {
        cy.tabsCanGoRight('destination')
        // cy.tabsCanGoRight('crew')
        cy.tabsCanGoRight('technology')
    })

    it('pressing left on the first tab focuses on the last tab', () => {
        cy.tabsCanLoopToTheEnd('destination')
        // cy.tabsCanLoopToTheEnd('crew')
        // cy.tabsCanLoopToTheEnd('technology')
    })

    it('pressing right on the last tab focuses on the first tab', () => {
        cy.tabsCanLoopToTheStart('destination')
        // cy.tabsCanLoopToTheStart('crew')
        cy.tabsCanLoopToTheStart('technology')
    })
})