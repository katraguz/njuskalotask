class LoginPage {

    getH1(){
        return cy.get('.ContentHeader-title')
    }
    
    getUsername(){
        return cy.get('#login_username')
    }

    getPassword(){
        return cy.get('#login_password')
    }

    getLoginbutton(){
        return cy.get('#login_login')
    }

    getLoginHeader(){
        return cy.get('.Header-userCaption')
    }

    getLogout(){
        return cy.get('.Header-authNav')
    }

    getLogoutHeader(){
        return cy.get('.Header-authNavListItem')
    }
}

export default LoginPage;