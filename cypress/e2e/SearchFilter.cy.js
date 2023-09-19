import Search from "./pageObjects/Search"

describe('Search with filter', () => {
  
    before(function() {
        cy.fixture('logindata').then(function(data){
            this.data=data
          })

          cy.fixture('searchterms').then(function(terms){
            this.terms=terms
          })

    })
  
    it('should allow user to search with filter', function() {

        const search = new Search()

        cy.login(this.data.username, this.data.password)

        search.getSearchbar().type(this.terms.keyword)
            .type('{enter}')
        search.getPriceMax().type(this.terms.price_max)
        search.getSubmitButton().click()

        search.getH1().should('contain', 'Rezultati pretrage za ' + this.terms.keyword)
        cy.url().should('include', 'price%5Bmax%5D=' + this.terms.price_max)
     
    })
  })