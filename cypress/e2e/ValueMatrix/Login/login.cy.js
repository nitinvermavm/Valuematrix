///<reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe ('Login Test Automate ', ()=>{

    it.skip(' TCID_1_ Login with Valid email and Valid password ' , () => {
        
        cy.visit('http://stage.valuematrix.ai/login');
        cy.get("input[name='username']",{ timeout: 10000 }).should('be.visible').type('admin@supertech.com');
        cy.get("input[name='password']",{ timeout: 10000 }).should('be.visible').type('Holmes@123');
        cy.get('.bg-emerald-700',{ timeout: 60000 }).click();
        cy.url().should('eq','http://stage.valuematrix.ai/company')

     })
     
     it(' Conapny Post a new Job ' , () => {

        cy.visit('http://stage.valuematrix.ai/login');
        cy.get("input[name='username']",{ timeout: 10000 }).should('be.visible').type('admin@supertech.com');
        cy.get("input[name='password']",{ timeout: 10000 }).should('be.visible').type('Holmes@123');
        cy.get('.bg-emerald-700',{ timeout: 60000 }).click();
        cy.url().should('eq','http://stage.valuematrix.ai/company');
        cy.get('.py-1.px-2.text-md',{ timeout: 30000 }).click();
        cy.get("input[name='jobTitle']").type('Sr. Java Developer');
        cy.get('#jobTitleSelect').select('Software Developer')
        cy.get('.DraftEditor-editorContainer').type('This is a Job Desription')
        cy.get('#headlessui-combobox-input-:r4:').select('Gurgaon, IN') 

        






     })
    
})
    
   