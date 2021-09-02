import BasePage from "./base.page";

const PAGE_TIMEOUT = 10000


class HomePage extends BasePage{
    get btnLogin () { return $('')};
    get btnDashboard() { return $('#newsletter-input')}
    get btnNewsletter() {return $('#newsletter_block_left > div > form > div > button')}
    get avisoNewsletter() {return $('#columns > p')}
    
    //Click SignIn
    async clickSignIn(){
        //Click en Boton SignIn
        await this.btnSignIn.click();
       }


    
}

export default new HomePage();