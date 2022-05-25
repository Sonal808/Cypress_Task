class SummeryPage {

    cartmessage(){

        return cy.get('span[class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]')
    }

    addcart(){

        return cy.get('#sw-gtc > .a-button-inner > .a-button-text')
    }



    



}
export default SummeryPage