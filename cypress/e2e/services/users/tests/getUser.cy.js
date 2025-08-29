import userSchema from '../contracts/user.contract';
import * as getUser from '../requests/getUser.request';

describe('GET: Buscar usuário', () => {
    beforeEach(() => {

        cy.login();
        
    });

    it('Deve listar os usuários cadastrados', () => {

        getUser.listar().should((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.not.null;
        });
    });

    it('Deve validar o contrato da listagem de usuarios', () => {

        getUser.listar().should((res) => {
            return userSchema.validateAsync(res.body);
        });
    });
});
