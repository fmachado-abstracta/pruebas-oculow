import HomePage from '../pages/home.page';
import { expect } from 'chai';

//Datos para CP09
import DATOS from '../Datos/datosRegistroCP09.csv';



describe('registroCP09', () =>{
    DATOS.forEach(({name,lastname,username,email,password}) => {
         it('Registro de usuario', async () => {
            //Abro la página
            await HomePage.abrir('/');
             
            //Registro el usuario
            await HomePage.registerAccount(name,lastname,username,email,password,password);
             
            /*Compruebo que NO se creó el usuario si me mantengo en página Login
            */            
            await expect(await HomePage.devolverTituloPagina()).to.equal('Sign-Up');
            
            
         });
     });
 });