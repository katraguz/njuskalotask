import LoginPage from "./pageObjects/LoginPage"

describe('Log in/log out feature', () => {

  before(function () {
    cy.fixture('logindata').then(function(data){
      this.data=data
    })

    cy.visit('/prijava/')
    cy.get('#didomi-notice-agree-button').click()
  })


  it('should allow user to log in and log out', function () {

    const loginPage = new LoginPage ()
      loginPage.getH1().should('contain', 'Prijava')

      loginPage.getUsername().type(this.data.username)
      loginPage.getPassword().type(this.data.password)
      loginPage.getLoginbutton().click()

      loginPage.getLoginHeader().should('contain', this.data.username)

      loginPage.getLogout().click()
      loginPage.getLogoutHeader().should('contain', 'Prijava')
      
  })
})