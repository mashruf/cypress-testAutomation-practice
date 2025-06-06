class Login{
    visitWebsite(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    setUsename(username){
        cy.get("input[placeholder='Username']").type(username);
    }

    setPassword(password){
        cy.get("input[placeholder='Password']").type(password);
    }

    clickLoginButton(){
        cy.get("button[type='submit']").click();
    }

    verifyLogin(){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard");
    }

}

export default Login;