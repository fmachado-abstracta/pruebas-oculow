import HomePage from '../pages/home.page';
import { expect } from 'chai';

//Datos para CP07
import DATOS from '../Datos/datosRegistroCP07.csv';



describe('registroCP07', () =>{
    DATOS.forEach(({name,lastname,username,email,password}) => {
         it('Registro de usuario', async () => {
            //Abro la página
            await HomePage.abrir('/');
             
            //Registro el usuario
            await HomePage.registerAccount(name,lastname,username,email,password,password);
             
            /*Compruebo que NO se creó el usuario si estoy en página Login
            */            
            await expect(await HomePage.devolverTituloPagina()).to.equal('Sign-Up');
            
            
         });
     });
 });