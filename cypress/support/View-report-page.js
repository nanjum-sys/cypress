export class Report{
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
    patientspec(){
        //Pruitt Dylan patient selected
        cy.wait(2000)
        cy.get(':nth-child(2) > .pl-0 > .d-flex > div').click();
        //Click on go to findings
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > :nth-child(2) > .btn').click();
        //Click on view report
        cy.wait(10000)
        cy.get('div#main a.btn.btn-light-primary.font-weight-bolder.btn-sm.mr-4').click();
        //Complete click
        cy.get('#id_step').select('Complete').should('have.value', '4')
        //Assignee
        cy.wait(2000)
        cy.get('#id_assignee').select('Alan Sosnovsky').should('have.value', '2')
        //Back to exam
        cy.wait(4000)
        cy.get('[href="/patients/513/exams/3782/"]').click({mutiple:true});
        //Click on Back
        cy.get('.container-fluid > :nth-child(2) > .btn').click({force:true});

    }
    Source(){
        //Riuz patient
        cy.get(':nth-child(5) > .pl-0 > .d-flex > div').click();
        //Go to findings
        cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
        //Click on measurement
        cy.get('[data-original-title="Measurements"] > .FqMq_x64V7gcyBqeBvef').click();
        //Click on custome
        cy.get('.p2a8XOFtY6rfhLzk9coL > .btn').click();
        //Click on value
        cy.get('.IHx242IPrPewvZZ6d7VR').type('2')
        //Click on unit nav
        cy.wait(4000)
        cy.get('#dd-33 > input').type('mm')
        //Click on delete
        cy.get(':nth-child(3) > :nth-child(4)').click();
    }
    measurements(){
        //Click on thomas tylor
        cy.get(':nth-child(4) > .pl-0 > .d-flex > div').click();
        //Click on manage
        cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn').click();
        //Name 
        cy.get('#id_name').type('Tylor')
        //Add value
        cy.get('#id_value').type('129')
        //unit name
        cy.get('#id_unit_name').type('ulfat bano')
        cy.wait(3000)
        cy.get('#id_group').select('Mitral Valve Doppler').should('have.value','3');
        //Click on add
        cy.get('p > .btn').click();
        //Click on edit
        cy.wait(4000)
        cy.get(':nth-child(2) > .pr-0').click({multiple:true});
        //Click on source id
        //OCR Extracted
        cy.wait(4000)
        cy.get('#id_source').select('OCR Extracted').should('have.value','OCR');
        //Click on save
        cy.get('.btn-primary').click();

    }
    Logout(){
        //Click to back screen
        cy.get('[href="/patients/402/exams/3980/"] > .btn').click()
    }
    logout(){
        //Click on toggle
        cy.get('#kt_quick_user_toggle').click();
        //Click on logout button
        cy.wait(4000)
        cy.get('div#kt_quick_user button[type="submit"]').click({mutiple:true});
    }


}
export default Report