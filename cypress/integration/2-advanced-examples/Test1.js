/// <reference types="Cypress" />
import HomePage from '../PageObjects/HomePage'
import SearchPage from '../PageObjects/SearchPage'
import ProductPage from '../PageObjects/ProductPage'
import SummeryPage from '../PageObjects/SummeryPage'
import CartPage from '../PageObjects/CartPage'

describe('testcase1',function(){

it('validate web page', function(){

    cy.visit("https://www.amazon.com/")
    cy.title().should('eq','Amazon.com. Spend less. Smile more.')

})

it('search product validation',function(){

   const homepage = new HomePage
   const searchpage = new SearchPage


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

it('select a product and add to cart',function(){

    const productpage = new ProductPage
    const summerypage = new SummeryPage
    const cartpage = new CartPage

    productpage.selectproduct().eq(5).click()
    productpage.addtocart().click()

    
    summerypage.cartmessage().should('have.text','\nAdded to Cart\n')

    summerypage.addcart().click()
    cartpage.cartcount().should('have.length',1)

    
})

})