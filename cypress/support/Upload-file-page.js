export class Upload{
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
    patient(){
        //Click on first patient
        cy.wait(4000)
        cy.get(':nth-child(1) > .pl-0 > .d-flex > div > .text-dark-75').click({force:true});
        //Go to findings
        cy.get('tbody > :nth-child(1) > :nth-child(2) > .btn').click();
        //File upload
        cy.get('.CV6rO_k7awp8wzZkIEIK').selectFile('cypress/fixtures/I7.dcm')
        //Add measurement
        cy.wait(7000)
        cy.get('[data-original-title="Measurements"] > .FqMq_x64V7gcyBqeBvef').click();
        //Click on echo
        cy.wait(2000)
        cy.get('#parentid_-1').click();
        //Click on LV
        cy.get('#heading12 > #parentid_1').click();
        //Click on LV first
        cy.get(':nth-child(1) > .STJIQ0plCKjUr33vhRfw > .btn').click();
        //Click on LVOT
        cy.get('.IHx242IPrPewvZZ6d7VR').click({multiple:true}).type('3');
        //Click on cm
    //   cy.get('#dd-16 > input').clear().type('cm')


        

    }


}
export default Upload