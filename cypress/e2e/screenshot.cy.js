describe("Screenshot",()=>{
    it("Homepage",()=>{
        cy.visit("https://www.demoblaze.com/");
        cy.get(".col-lg-4").should("have.length.gte",5)
        cy.screenshot();
    })

    it("Screenshot of a element",()=>{
        cy.visit("https://www.demoblaze.com/");
        cy.get(".navbar-brand").screenshot("Logo");
    })
})