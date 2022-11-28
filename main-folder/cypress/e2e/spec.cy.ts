describe('E2E Testing of Jobby App', () => {
  before(() => {
    cy.visit('http://localhost:3000/')

  })
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('jwt_token')
    cy.intercept('GET', '/profile', {fixture:'profileData.json'})
    cy.intercept('GET', '/jobs?employment_type=&minimum_package=', {fixture:'job.json'})
    cy.intercept('GET', '/jobs/:id', {fixture:'jobDetails.json'})
  })
 
  it('testing login page Warnings without Entering username and password', () => {
    cy.contains('Login').click()
  })
  it('Enter wrong Username and Password ', () => {
    cy.get('input[placeholder*="Username"]').type('cvncbn')
    cy.get('input[placeholder*="Password"]').type('cvnvbncv')
    cy.contains('Login').click()
    cy.get('input[placeholder*="Username"]').clear()
    cy.get('input[placeholder*="Password"]').clear()
  })

  it('Loging into website', () => {
    cy.get('input[placeholder*="Username"]').type('rahul')
    cy.get('input[placeholder*="Password"]').type('rahul@2021')
    cy.contains('Login').click()
  })

  it('checking directed to home page and change language', () => {
    cy.url().should('equal', 'http://localhost:3000/')
    cy.get("select").select(1).invoke("val").should("eq", "hi")
    cy.get("select").select(0).invoke("val").should("eq", "en")
  })
  it('checking job page link and language dropdown in job page', () => {
    cy.get('p[data-testid*="NavJob"]').click()
    cy.url().should('equal', 'http://localhost:3000/jobs')
    cy.get("select").select(1).invoke("val").should("eq", "hi")
  })
  it('searching jobs', () => {
    cy.get('input[placeholder*="Search"]').type('frontend')
  })
  it('Filter by employment type', () => {
    cy.get('[data-testid="PARTTIME"]').check()
    cy.get("select").select(0).invoke("val").should("eq", "en")
  })
  it('Filter by Salary', () => {
    cy.get('[data-testid="3000000"]').check()
  })
  it('clear filters',()=>{
    cy.get('input[placeholder*="Search"]').clear()
    
  })
  it('job details',()=>{
    cy.get('[data-testid="5a75b254-a812-4c2d-ae26-ec9e04234bf7"]').click()
    cy.url().should('equal', 'http://localhost:3000/jobs/5a75b254-a812-4c2d-ae26-ec9e04234bf7')
  })
  it('navbar home link',()=>{
    cy.get('p[data-testid*="Home"]').click()
    cy.url().should('equal', 'http://localhost:3000/')
  })
  it('loging out',()=>{
    cy.get('[data-testid*="logout"]').click()
    cy.url().should('equal', 'http://localhost:3000/login')
    
  })

})


