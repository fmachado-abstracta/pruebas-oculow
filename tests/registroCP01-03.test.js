import HomePage from '../pages/home.page';
import { expect } from 'chai';

//Datos para CP01-CP02-CP03
import DATOS from '../Datos/datosRegistroCP01-03.csv';



describe('registroCP01-03', () =>{
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
            
            //VER PORQUE DA ERROR EN 1er o ULTIMA EJECUCIÓN.
            
         });
     });
 });