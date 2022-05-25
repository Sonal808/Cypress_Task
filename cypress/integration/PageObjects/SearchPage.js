class SearchPage {

    getproduct(){

        return cy.get('h2 a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')
    }

    productcount(){

        return cy.get ('div[class="a-section a-spacing-none s-padding-right-small s-title-instructions-style"]')
    }

    


}
export default SearchPage