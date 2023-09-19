import Search from "./pageObjects/Search"

describe('Search with ID', () => {
  
    before(function() {
        cy.fixture('logindata').then(function(data){
            this.data=data
          })

          cy.fixture('searchterms').then(function(terms){
            this.terms=terms
          })

    })
  
    it('should allow user to search with ID', function() {

        const search = new Search()

        cy.login(this.data.username, this.data.password)

        search.getSearchbar().type(this.terms.ad_ID)
            .type('{enter}')

        search.getAdData().should('contain', 'Šifra oglasa: ' + this.terms.ad_ID)
        cy.url().should('include', 'oglas-' + this.terms.ad_ID)
     
    })
  })