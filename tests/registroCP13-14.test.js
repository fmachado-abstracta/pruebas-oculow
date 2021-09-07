import HomePage from '../pages/home.page';
import { expect } from 'chai';

//Datos para CP13,CP14
import DATOS from '../Datos/datosRegistroCP13-14.csv';



describe('registroCP13-14', () =>{
    DATOS.forEach(({name,lastname,username,email,password}) => {
         it('Registro de usuario', async () => {
            //Abro la página
            await HomePage.abrir('/');
             
            //Registro el usuario
            await HomePage.registerAccount(name,lastname,username,email,password,password);
            
            await browser.pause(15000);
            
            /*Compruebo que NO se creó el usuario si estoy en página SignUp
            */            
            await expect(await HomePage.devolverTituloPagina()).to.equal('Sign-Up');
            
         });
     });
 });