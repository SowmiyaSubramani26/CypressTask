import { successsignin } from "./components"

export default class SignInActions {
    static ValidateSignInPage() {
        cy.contains('Already registered?')
    }
    static AlreadyRegistered(email,pswd) {
        cy.get('#email').type(email)
        cy.get('#passwd').type(pswd)
        cy.get('#SubmitLogin').click()  
    }
    static ValidateErrorMessage() {
        cy.get('.alert-danger').should('be.visible')
        cy.screenshot({capture:'fullPage'})
    }
    static SuccessfullSignIn(){
        cy.contains(successsignin)
        cy.screenshot({capture:'fullPage'})
    }
}
