import { signInurl } from "../support/components"
import RegistrationActions from "../support/RegistrationActions"

describe('To Validate the Registration Process by entering only Mandatory fields', () => {
    before(function () {
        cy.visit(signInurl)
    })
    it('To Validate the Registration Part', () => {
        RegistrationActions.ValidateCreateAccount()
    })
    it('To Enter the Email id', () => {
        cy.fixture('regcredentials').then(({ email, pswd }) => {
            RegistrationActions.EnterEmail(email)
        })
    })
    it('To Click the Create Button', () => {
        RegistrationActions.SubmitButton()
    })
   
    it('Filling the details', () => {
        cy.fixture('regcredentials').then(({ cusfstnm,cuslstnm,pswd,address,city,pincd,phno }) => {
            RegistrationActions.FillingDetails(cusfstnm,cuslstnm,pswd,address,city,pincd,phno)
        })
    })
})