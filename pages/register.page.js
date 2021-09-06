import getComputedLabel from "webdriverio/build/commands/element/getComputedLabel";
import BasePage from "./base.page";

const PAGE_TIMEOUT = 10000


class RegisterPage extends BasePage{
    get campoFirstName() { return $('#first_name')};
    get campoLastName() { return $('#last_name')};
    get campoUsername() { return $('#username')};
    get campoEmail() { return $('#email')};
    get campoPassword() { return $('#password')};
    get campoConfirmPassword() { return $('#confirm_password')};
    get btnPrivacyPolicy () { return $('.custom-control-label')};
    get btnSubmit () { return $('button[type="submit"]')};
    

    //Registro usuario
    async registerAccount(nombre,apellido,username,email,password,confpassword){
        await this.vaciarCampoYEnviarTexto(await this.campoFirstName,nombre);
        await this.vaciarCampoYEnviarTexto(await this.campoLastName,apellido);
        await this.vaciarCampoYEnviarTexto(await this.campoUsername,username);
        await this.vaciarCampoYEnviarTexto(await this.campoEmail,email);
        await this.vaciarCampoYEnviarTexto(await this.campoPassword,password);
        await this.vaciarCampoYEnviarTexto(await this.campoConfirmPassword,confpassword);
        await this.clickearElemento(await this.btnPrivacyPolicy);
        await this.clickearElemento(await this.btnSubmit);
       
    }
    
}

export default new RegisterPage();