/// <reference types="Cypress" />

describe("Assertion",()=>{

    it("URL",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain","orangehrmlive.com")
        .and("not.include","greenhrm");
    })    

    it("Title",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should("eq","OrangeHRM")
        .and("contain","HRM")
        .and("not.include","Grenn");
    })


    it("Logo",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('.orangehrm-login-branding > img').should("be.visible")
        .and("exist");
    })

    it("Number of links",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("a").should("have.length",5);
    })


    it("Asserting value of an element",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Username']").should("have.value","Admin");
    })

    it.only("Explicit assertion",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();

        let expName = "manda user";

        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actName = x.text();

            expect(actName).to.equal(expName);
            assert.equal(actName,expName);
        })
    })

})