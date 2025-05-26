describe("Fixtures and data driven testing", () => {


    it("Direct access", () => {
        cy.fixture("orangehrm").then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/");
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-topbar-header-breadcrumb").should("contain", data.expected);
        })
    })

    let userData;

    before("", () => {
        cy.fixture("orangehrm").then((data) => {
            userData = data;
        })
    })

    it("Using single file in multiple it blocks", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("input[placeholder='Username']").type(userData.username);
        cy.get("input[placeholder='Password']").type(userData.password);
        cy.get("button[type='submit']").click();
        cy.get(".oxd-topbar-header-breadcrumb").should("contain", userData.expected);
    })

    it.only("Data driven test", () => {

        cy.fixture("orangehrm2").then((data) => {
            data.forEach((ddt) => {
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
                cy.visit("https://opensource-demo.orangehrmlive.com/");
                cy.get("input[placeholder='Username']").type(ddt.username);
                cy.get("input[placeholder='Password']").type(ddt.password);
                cy.get("button[type='submit']").click();

                if(ddt.username=="Admin" && ddt.password=="admin123"){
                    cy.get(".oxd-topbar-header-breadcrumb").should("contain",ddt.expected);
                    cy.wait(3000);
                    cy.get(".oxd-userdropdown-name").click();
                    cy.wait(3000);
                    cy.get(".oxd-dropdown-menu>li:nth-child(4)").click();
                }
                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("contain",ddt.expected);
                }
            })
        })

    })

})