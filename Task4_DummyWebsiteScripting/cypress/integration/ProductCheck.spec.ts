import { homeurl } from "../support/components"
import HomePage from "../support/HomePage"

describe ('To Validate the Home Page',()=>{
    before(function(){
        cy.visit(homeurl)
    })
    it('Page Verfied',()=>{
        HomePage.ValidateHomePage()
    })
    it('To Valid the logo',()=>{
        HomePage.Validatelogo()
    })
})