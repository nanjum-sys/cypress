import Upload from '../support/Upload-file-page'
describe('Sarc MedIQ web app Login Happy Positive Test Cases Flow', function () {
    const log = new Upload
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


    it('Verify user Login with valid credentials into MedIQ and upload file of any patient', function(){
        log.OpenURL(this.testdata.url.QA);
        log.enterEmail(this.testdata.username.MedIQuser);
        log.enterPassword(this.testdata.password.MedIQpass);
        log.button();
        log.patient();
       // login.logout()

    })
})

