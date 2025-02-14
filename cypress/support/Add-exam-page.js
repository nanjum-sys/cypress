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
        cy.get(':nth-child(2) > .pl-0 > .d-flex > div > .text-dark-75').click();
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
    Share_exam(){
        //Click on patient Lee michael
        cy.get(':nth-child(2) > .pl-0 > .d-flex > div > .text-dark-75').click();
        //Click on second result
        cy.get('#patientExamsTable > tbody > tr:nth-child(2) > td.pl-0.py-4.dtr-control > a > span').click();
        //Go to report
        cy.wait(4000)
        cy.get('.card-toolbar > .btn-navyBlue').click();
        // retry until this textarea has the correct value
        cy.get('.col > .btn').should('be.visible', 'Unsign Report')
        //Sign report
     /*   cy.get('.col-3 > .btn').click();
        //Back to exam
        cy.get('[href="/patients/512/exams/4697/"]').click();
        //Click on back button
        cy.get('.container-fluid > :nth-child(2) > .btn').click();
        //Share Exam
        cy.get(':nth-child(3) > :nth-child(10) > .btn').click();
        //Share click
        cy.get('#shareExamForm > .btn').click();
        cy.wait(2000)
        cy.get('.modal-footer > .btn-primary').click()
        //View share
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(10) > .btn').click()*/


    }


}
export default AddExam