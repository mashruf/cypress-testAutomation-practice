import Login from "./pageObjectModel/login";

describe("Page object model",()=>{
    
    it("Login",()=>{
        const logIn = new Login();
        logIn.visitWebsite();
        logIn.setUsename("Admin");
        logIn.setPassword("admin123");
        logIn.clickLoginButton();
        logIn.verifyLogin();
    })
})