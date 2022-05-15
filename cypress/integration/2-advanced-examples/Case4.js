/// <reference types="Cypress" />

describe('TestScenario',function(){

    it('scenario1',function(){

        cy.visit('https://home.kuehne-nagel.com/')
        cy.get('button[id="accept-recommended-btn-handler"]').click()
        cy.get('a[class="qbt__button btn-anim-hover mt-2 btn-all-modes"]').invoke('removeAttr','target').click({force: true})
        //cy.get('span[class="sc-mykn-submenu-quote"]').should('have.value','Profile')
        
    })


})