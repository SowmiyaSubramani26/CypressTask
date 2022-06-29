import { url } from "../../../config"
import Feedback from "../page-objects/components/Feedback"
import Navbar from "../page-objects/components/Navbar"

describe('To Submit the Feedback form', () => {
    before(function () {
        cy.visit(url)
        Navbar.clickFeedback()
    })
    it('Entering the details and submitting the form', () => {
        Feedback.EnterName()
        Feedback.TypeEmail()
        Feedback.EnterComment()
        Feedback.EnterSubject()
        Feedback.SubmitFeedback()
    })
})