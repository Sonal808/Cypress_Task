import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../PageObjects/HomePage'
import SearchPage from '../../PageObjects/SearchPage'
import ProductPage from '../../PageObjects/ProductPage'
import SummeryPage from '../../PageObjects/SummeryPage'
import CartPage from '../../PageObjects/CartPage'

const productpage = new ProductPage
const summerypage = new SummeryPage
const cartpage = new CartPage
const homepage = new HomePage
const searchpage = new SearchPage

Given('I open Amazon page',function(){

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    
    cy.visit("https://www.amazon.com/")
    cy.title().should('eq','Amazon.com. Spend less. Smile more.')
})
When('I search a product',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

      homepage.getsearchbox().type('macbook')

    homepage.getdropdownvalues().each (($e1,index,$list)=>{

        if ($e1.text()==="macbook pro"){

            cy.wrap($e1.click())
        }
    })
    homepage.getsearchbox().should('have.value','macbook pro')
    searchpage.productcount().should('have.length',17)


})
Then('I select a product',()=>{

    productpage.selectproduct().eq(5).click()
    
})
And('I add to the cart',()=>{

    productpage.addtocart().click()
    summerypage.cartmessage().should('have.text','\nAdded to Cart\n')
})
And('I check the cart',()=>{

    summerypage.addcart().click()
    cartpage.cartcount().should('have.length',1)

})