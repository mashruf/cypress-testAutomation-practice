describe("Handling table",()=>{

    beforeEach("",()=>{
        cy.visit("https://vinothqaacademy.com/webtable/");
    })
    it("Number of rows and column",()=>{
        cy.get("thead>tr>th").should("have.length",6);
        cy.get("tbody>tr").should("have.length",11);
    })
    it("Check cell data",()=>{
        cy.get("tbody>tr:nth-child(3)>td:nth-child(4)").should("contain","vinoth.r@example.com");
    })
    it("Read data from all the rows and columns",()=>{
        cy.get("tbody>tr").each((row)=>{
            cy.wrap(row).find("td").each((column)=>{
                cy.log(column.text());
            })
        })
    })
})