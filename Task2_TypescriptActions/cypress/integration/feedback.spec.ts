describe('To Visit and Submit Feedback',()=>{
    it('To visit Feedback Page',()=>{
        cy.visitFeedbackpage()
    })
    it('To fill the Feedback',()=>{
        cy.submitFeedback('sowmiya','email@abc.com','Test','Dummy Message')
    })
})