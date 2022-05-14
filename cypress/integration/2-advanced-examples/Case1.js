/// <reference types="Cypress" />
//import dayjs from "dayjs"
import 'cypress-file-upload' 
//import * as moment from 'moment'

describe('Assignment_case1',function(){

    it('TC_Formvalidation',function(){

        

        cy.visit("https://demoqa.com/automation-practice-form")

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

        cy.get('#firstName').type('Tom').should('have.value','Tom')
        cy.get('#lastName').type('Boon').should('have.value','Boon')
        cy.get('#userEmail').type('Tome123@gmail.com').should('have.value','Tome123@gmail.com')
        cy.get('input#gender-radio-1').check({force: true}).should('be.checked').and('have.value','Male')
        const mobileNo = '1231231234'
        cy.get('#userNumber').type(mobileNo).invoke('val').should('have.length', 10)

        cy.get('input[id="dateOfBirthInput"]').click()
        cy.get('select.react-datepicker__month-select').select('3').should('have.value',3)
        cy.get('.react-datepicker__year-select').select('1980').should('have.value',1980)
        
        cy.get('div.react-datepicker__month div.react-datepicker__week div').each(($e1,index,$list)=>{

            if($e1.text()==="6"){
                $e1.click()
                //cy.wrap($e1).click()
            }
        })
        cy.get('#dateOfBirthInput').should('have.value',"06 Apr 1980")
        cy.wait(2000)
        cy.get('div[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]').type('Maths')
        
        cy.get('div[class*=subjects-auto-complete__]:visible').next('div[class*="subjects-auto-complete__menu"]').click({multiple: true})
        
        const subject=cy.get('div div[class="css-12jo7m5 subjects-auto-complete__multi-value__label"]:visible').then(function(subel){

            const sub =subel.text()
            expect(sub).to.equal('Maths')
        })
        
        cy.get('input#hobbies-checkbox-1').check({force: true}).should('be.checked')
        const yourFixturespath = 'image1.jpeg'
        cy.get('#uploadPicture').attachFile(yourFixturespath)

        cy.get('#currentAddress').type('No 20: main Ave')

        cy.get('div[id="state"]').click({force: true}).type('NCR')
        cy.get('div[class*=" css-26"]:visible').click({multiple: true})
        cy.get('div[id="city"]').click({force: true}).type('Delhi')
        cy.get('div[class*=" css-26"]:visible').click({multiple: true})
        cy.get('button[id="submit"]').click({force: true})

        cy.get('tr td:nth-child(1)').each(($e1,index,$list)=>{

            const txt= $e1.text()
            if(txt.includes('Student Name'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('Tom Boon')
                })

            }
            else if (txt.includes('Student Email'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('Tome123@gmail.com')
                })

            }
            else if (txt.includes('Gender'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('Male')
                })

            }
            else if (txt.includes('Mobile'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('1231231234')
                })

            }
            else if (txt.includes('Date of Birth'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('06 April,1980')
                })

            }
            else if (txt.includes('Subjects'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('Maths')
                })

            }
            else if (txt.includes('Hobbies'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('Sports')
                })

            }
            else if (txt.includes('Picture'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('image1.jpeg')
                })

            }
            else if (txt.includes('Address'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('No 20: main Ave')
                })

            }
            else if (txt.includes('State and City'))
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(val){

                   const stu= val.text()
                   expect(stu).to.equal('NCR Delhi')
                })

            }
            else
            {
                cy.log("Error")
                console.log("Error")
            }
        })



    })

})