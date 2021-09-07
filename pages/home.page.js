import BasePage from "./base.page";
import RegisterPage from "./register.page";

const PAGE_TIMEOUT = 10000


class HomePage extends BasePage{
    //$('li=Logout') PARA SELECCIONAR EL BTNLOGIN
    get btnLogin () { return $('#navbar-collapse > ul > li:nth-child(6)')};
    get btnCreateAccount() { return $('.col-6.text-right>.text-muted')};
    get campoUsername() { return $('#username')};
    get campoPassword() { return $('#password')};
    get btnSignIn () { return $('button[type="submit"]')};
    get btnProfile() {return $('#user_session_name')}
    get btnLogOut() {return $('.dropdown-item.btn_sign_out')}

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

    //Desloguear usuario
    async logOut(){
        await this.clickearElemento(await this.btnProfile);
        await this.clickearElemento(await this.btnLogOut);
        await this.clickearElemento(await $('.swal2-confirm.swal2-styled'));
        await browser.pause(5000);
    }    

}

export default new HomePage();