export class Login{
    OpenURL(QA){
        return cy.visit(QA)
    }
    enterEmail(MedIQuser){
        cy.wait(2000)
        cy.get('#id_username').click()
            cy.get('#id_username').type(MedIQuser)
    }
    enterPassword(MedIQpass){
        cy.wait(2000)
        cy.get('#id_password').click()
        cy.get('#id_password').type(MedIQpass)
    }
    button(){
        cy.wait(2000)
        cy.get(':nth-child(5) > .btn').click();
    }
    logout(){
        //Click on toggle
        cy.get('#kt_quick_user_toggle').click();
        //Click on logout button
        cy.wait(2000)
        cy.get('form > .btn').click();
    }


}
export default Login