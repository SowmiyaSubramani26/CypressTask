import { signInurl } from "../support/components"
import SignInActions from "../support/SignInActions"


describe('To Test SignInPage', () => {
    before(function () {
        cy.visit(signInurl)
    })
    it('To Check SignIn Page', () => {
        SignInActions.ValidateSignInPage()     
    })
    it('To Validate the Credentials', () => {

        cy.fixture('invaliduser').then(({ email, pswd }) => {
            SignInActions.AlreadyRegistered(email, pswd)
        })
    })
    it('To Validate Invalid Message', () => {
        SignInActions.ValidateErrorMessage()
        
        
    })
})

