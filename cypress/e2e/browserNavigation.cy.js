describe("Browser navigation",()=>{
    it("Navigation",()=>{
        cy.visit("https://automationpanda.com/");
        cy.title().should("contain","Automation Panda");
        cy.get(".menu-item-9165").click();
        cy.get(".entry-title").should("contain","Teaching");

        cy.go("back");
        cy.url().should("eq","https://automationpanda.com/");

        cy.go("forward");
        cy.url().should("eq","https://automationpanda.com/teaching/");

        cy.go(-1);
        cy.url().should("eq","https://automationpanda.com/");

        cy.go(1);
        cy.url().should("eq","https://automationpanda.com/teaching/");

        cy.reload();

    })
})