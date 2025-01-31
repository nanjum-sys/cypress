import AddExam from '../support/Add-exam-page';
describe('Sarc MedIQ web app Login Happy Positive Test Cases Flow', function () {
    const Add = new AddExam
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
               cy.viewport(890, 400) 
          });


    it('Verify user Login with valid credentials into MedIQ', function(){
        Add.OpenURL(this.testdata.url.QA);
        Add.enterEmail(this.testdata.username.MedIQuser);
        Add.enterPassword(this.testdata.password.MedIQpass);
        Add.button();
        Add.newExam();

        Add.logout()

    })
})

