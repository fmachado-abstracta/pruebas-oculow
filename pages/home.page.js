import BasePage from "./base.page";
import RegisterPage from "./register.page";

const PAGE_TIMEOUT = 10000


class HomePage extends BasePage{
    get btnLogin () { return $('#navbar-collapse > ul > li:nth-child(6)')};
    get btnCreateAccount() { return $('.col-6.text-right>.text-muted')};
    get campoUsername() { return $('#username')};
    get campoPassword() { return $('#password')};
    get btnSignIn () { return $('button[type="submit"]')};



    //Loguear usuario
    async logAccount(usuario,contrasena){
        await this.clickearElemento(await this.btnLogin);
        await this.vaciarCampoYEnviarTexto(await this.campoUsername,usuario);
        await this.vaciarCampoYEnviarTexto(await this.campoPassword,contrasena);
        await this.clickearElemento(await this.btnSignIn);
        await browser.pause(10000);
    }

    //Registro usuario
    async registerAccount(nombre,apellido,username,correo,contrasena,confirmContrasena){
        await this.clickearElemento(await this.btnLogin);
        await this.clickearElemento(await this.btnCreateAccount);
        await RegisterPage.registerAccount(nombre,apellido,username,correo,contrasena,confirmContrasena);
    }
    
}

export default new HomePage();