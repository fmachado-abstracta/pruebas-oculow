import HomePage from '../pages/home.page';
import { expect } from 'chai';

//Datos para CP11,CP12
import DATOS from '../Datos/datosRegistroCP11-12.csv';



describe('registroCP11-12', () =>{
    DATOS.forEach(({name,lastname,username,email,password}) => {
         it('Registro de usuario', async () => {
            //Abro la página
            await HomePage.abrir('/');
             
            //Registro el usuario
            await HomePage.registerAccount(name,lastname,username,email,password,password);
            
            await browser.pause(15000);
            
            /*Compruebo que se creó el usuario si estoy en página Login
            */            
            await expect(await HomePage.devolverTituloPagina()).to.equal('Sign-In');
            
         });
     });
 });