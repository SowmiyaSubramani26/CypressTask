export default class RegistrationActions {
    static ValidateCreateAccount() {
        cy.contains('Create an account')
    }
    static EnterEmail(email) {
        cy.get('#email_create').type(email)
        cy.get('#create-account_form').screenshot()
    }
    static SubmitButton() {
        cy.get('#SubmitCreate').click()
    }
  
    static FillingDetails(cusfstnm, cuslstnm,pswd,address,city, pincd, phno) {
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type(cusfstnm)
        cy.get('#customer_lastname').type(cuslstnm)
        cy.get('#passwd').type(pswd)
        cy.get('#address1').type(address)
        cy.get('#city').type(city)
        cy.get('select[name="id_state"]').select('California')
        cy.get('#postcode').type(pincd)
        cy.get('#phone_mobile').type(phno)
        cy.contains('Register').click()
        cy.screenshot({capture:'fullPage'})
    }
}