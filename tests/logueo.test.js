import HomePage from '../pages/home.page';
import { expect } from 'chai';
import DATOS from '../Datos/datoslogin.csv';



describe('logueo', () =>{
   DATOS.forEach(({username,password}) => {
        it('Logueo de usuario', async () => {
            //Abro la página
            await HomePage.abrir('/');
            
            //Logueo Usuario
            await HomePage.logAccount(username,password);
            
            //Compruebo que estoy en pagina My Account
            await expect(await HomePage.devolverTituloPagina()).to.equal('Dashboard');

            //Tengo que desloguearme sino queda sesión abierta para el próximo test
            await HomePage.logOut();
        });
    });
});
