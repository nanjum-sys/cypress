import AddPatient from '../support/Add-patient-page';
describe('Sarc MedIQ web app Login Happy Positive Test Cases Flow', function () {
    const Add = new AddPatient
    beforeEach(function () {
        cy.fixture('example').then(function(testdata){       
        this.testdata = testdata       
         // Uncaught error events off       
           Cypress.on('uncaught:exception', (err, runnable) => {        
         //  // returning false here prevents Cypress from        
         //  // failing the test        
           return false     
            });   
            });  
               cy.viewport(1400, 760) 
          });


    it('Verify user Login with valid credentials into MedIQ and add a new Patient', function(){
        Add.OpenURL(this.testdata.url.QA);
        Add.enterEmail(this.testdata.username.MedIQuser);
        Add.enterPassword(this.testdata.password.MedIQpass);
        Add.button();
        Add.newPatient();
        Add.logout()

    })
})

