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
        cy.get('div[class="main-header"]').should('have.text','Profile')
        
        cy.get('#gotoStore').click()

        cy.get('div span[id="see-book-Git Pocket Guide"]').click()
        
       cy.get('div[class="text-right fullButton"]').find('button[id="addNewRecordButton"]').click({force: true})
       cy.on('window:alert',(str1)=>{

        expect(str1).to.equal('Book added to your collection.')
       })

       cy.contains('Profile').click()
       cy.get('div[class="text-right button di"]').find('button[id="submit"]').click({force: true})
       cy.get('button[id="closeSmallModal-ok"]').click({force: true})
    //    cy.on('window:confirm',(txt)=>{
        
    //     expect(txt).to.contains('Do you want to delete all books?');
    //  })
       cy.wait(2000)
       cy.on('window:alert',(str2)=>{

        expect(str2).to.equal('All Books deleted.')
       })




    })





})