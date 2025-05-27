describe("Custom commmands",()=>{
    it("Handling links",()=>{
        cy.visit("https://www.demoblaze.com/");
        cy.clickLink("Nokia lumia 1520");
        cy.get(".name").should("have.text","Nokia lumia 1520");
    })


    it.only("Login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.Login("Admin","admin123");
        cy.get(".oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard");
    })
})