class HomePage {

    getsearchbox(){

        return cy.get ('input[id="twotabsearchtextbox"]')
    }

    getdropdownvalues(){

        return cy.get ('.s-suggestion-container div')
    }


}
export default HomePage