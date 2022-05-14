/// <reference types="Cypress" />

describe('Bookstore_case',function(){

    it('bookStoreLogin',function(){

        cy.visit('https://demoqa.com/login')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

        cy.get('#userName').type('sonal1')
        cy.get('#password').type('Sonal@1234')
        cy.get('#login').click()
        cy.log(cy.title())
        cy.get('#gotoStore').click()

        cy.get('div span[id="see-book-Git Pocket Guide"]').click()
        
       cy.get('div[class="text-right fullButton"]').find('button[id="addNewRecordButton"]').click({force: true})
       cy.on('window:alert',(str)=>{

        expect(str).to.equal('Book added to your collection.')
       })




    })





})