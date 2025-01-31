export class AddPatient{
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
        cy.wait(2000)
        cy.get('#kt_quick_user_toggle').click();
        //Click on logout button
        cy.wait(4000)
        cy.get('.navi > form > .btn').click({force:true});
    }
    newPatient(){
        //Click on plus add patient
        cy.get('[href="/patients/new/"] > .btn').click();
        //Mr number
        cy.get('#id_mrnumber').click().type('12345')
        //First name
        cy.wait(2000)
        cy.get('#id_first_name').click().type('Automation')
        //Last name 
        cy.get('#id_last_name').click().type('Tester')
        //City name
        cy.wait(2000)
        cy.get('#id_city').click().type('Lahore')
        //DOB click
        cy.wait(2000)
        cy.get('#id_dob').click();
        //Click on year
        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click();
        //Click on back nav
        cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .prev').click()
        //Click on month May
        cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(5)').click()
        //Click on 16 dec 2023
        cy.wait(4000)
        cy.get('[data-date="1715817600000"]').click();
        //Zip field click
        cy.wait(2000)
        cy.get('#id_zip').click().type('38000')
        //State field
        cy.get('#id_state').click().type('isb')
        //Phone click
        cy.wait(2000)
        cy.get('#id_phone').click().type('92010101001')
        //Click on save button
        cy.wait(2000)
        cy.get('.btn-primary').click();
        
    }
    search(){
        //Click on MR Number
        cy.get('input#id_mrnumber').click().type('12345');
        //Click on first name
        cy.wait(2000)
        cy.get('input#id_first_name').click().type('Automation');
        //Click on last name
        cy.wait(2000)
        cy.get('input#id_last_name').click().type('Tester');
        //Search button
        cy.get('form#search-form button[type="submit"].btn.btn-success.font-weight-bold.mr-2').click();
    }
    Edit(){
        //click on patient
        cy.wait(2000)
        cy.get('div > .text-dark-75').click();
        //Click on Edit profile
        cy.wait(4000)
        cy.get('div#main div.my-lg-0.my-2 > a:nth-child(1)').click();
        //Click on Email
        cy.wait(2000)
        cy.get('#id_email').clear().type('abc@mailinator.com')
        //Click on gender
        cy.wait(2000)
        cy.get('#id_gender').select('Female').should('have.value', 'F')
        //Click on save button
        cy.get('.btn-primary').click();
        //Edit profile button
        cy.wait(4000)
        cy.get('div#main div.my-lg-0.my-2 > a:nth-child(1)').click();
        //Click on delete button
        cy.wait(4000)
        cy.get('.delete-patient').click({force:true});
    }


}
export default AddPatient