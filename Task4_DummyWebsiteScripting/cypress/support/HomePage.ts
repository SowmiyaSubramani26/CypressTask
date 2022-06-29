import { logourl } from "./components"

export default class HomePage {
    static ValidateHomePage() {
        cy.url().should('include', 'index.php')
    }
    static Validatelogo() {

        cy.get('#header_logo').find('img').should('have.attr', 'src', logourl).screenshot()

    }
}