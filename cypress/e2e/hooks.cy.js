describe("hooks",()=>{
    
    before("",()=>{
        cy.log("Before");
    })
    beforeEach("",()=>{
        cy.log("Before Each");
    })
    after("",()=>{
        cy.log("After");
    })
    afterEach("",()=>{
        cy.log("After Each");
    })


    it("Google",()=>{
        cy.visit("https://www.google.com");
    })
    it("Youtube",()=>{
        cy.visit("https://www.youtube.com");
    })
})