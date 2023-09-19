class Search {
    getSearchbar(){
        return cy.get('#keywords')
    }

    getPriceMax(){
        return cy.get('input[name="price[max]"]')
    }

    getSubmitButton(){
        return cy.get('#submitButton')
    }

    getH1(){
        return cy.get('.ContentHeader-title')
    }

    getAdData(){
        return cy.get('.ClassifiedDetailSummary-adCode')
    }

}

export default Search;