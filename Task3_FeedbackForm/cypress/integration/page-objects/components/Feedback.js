export default class Feedback{
    static EnterName(){
        cy.get('#name').type('name')
    }
    static TypeEmail(){
        cy.get('#email').type('xxx@abc.com')
    }
    static EnterSubject(){
        cy.get('#subject').type('To Test')
    }
    static EnterComment(){
        cy.get('#comment').type('Dummy Message')
    }
    static SubmitFeedback(){
        cy.contains('Send Message').click()
    }
}