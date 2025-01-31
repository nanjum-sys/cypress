export class AddExam{
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
    newExam(){
        //Click on Lee Michael patient
        cy.get('tbody > :nth-child(1) > .pl-0').click();
        //Click on add new exam button
        cy.get('[href="/patients/512/exams/"]').click();
        //Click on drop down and select the jan
        cy.wait(4000)
        cy.get('#id_date_month').select('January').should('have.value', '1')
        //Click on date and select the 20
        cy.wait(2000)
        cy.get('#id_date_day').select('20').should('have.value', '20')
        // Click on Year and select the 2022
        cy.wait(2000)
        cy.get('#id_date_year').select('2020').should('have.value', '2020')
        ///Click on save button
        cy.wait(2000)
        cy.get('.btn-primary').click()

    }


}
export default AddExam