class ProductPage {

    selectproduct(){

        return cy.get('h2 a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')
    }

    addtocart(){

        return cy.get ('#add-to-cart-button')

    }



}
export default ProductPage