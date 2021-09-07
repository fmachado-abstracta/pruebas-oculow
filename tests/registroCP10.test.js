import HomePage from '../pages/home.page';
import { expect } from 'chai';

//Datos para CP10 - CONTRASEÑAS NO COINCIDEN
import DATOS from '../Datos/datosRegistroCP10.csv';


describe('registroCP10', () =>{
    DATOS.forEach(({name,lastname,username,email,password}) => {
         it('Registro de usuario', async () => {
            //Abro la página
            await HomePage.abrir('/');
             
            //Registro el usuario
            await HomePage.registerAccount(name,lastname,username,email,password,password+'123');
             
            /*Compruebo que NO se creó el usuario si estoy en página Login
            */            
            await expect(await HomePage.devolverTituloPagina()).to.equal('Sign-Up');

         });
     });
 });