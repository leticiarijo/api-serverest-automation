import { deleteUser } from '../requests/deleteUser.request.js';
import { gerarUsuarioDinamico, criarUsuario } from '../requests/postUser.request.js';

describe('Delete User', () => {
    beforeEach(() => {

        cy.login();

    });


    it('Deve deletar um usuário', () => {
        const usuario = gerarUsuarioDinamico();

        criarUsuario(usuario).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message','Cadastro realizado com sucesso');

            const fixturePath = 'cypress/fixtures/responseUserCadastrado.json';
            cy.writeFile(fixturePath, res.body);
        

            cy.fixture('responseUserCadastrado.json').then((id) => {
                const idUsuario = id._id;

                deleteUser(idUsuario).then((res) => {
                    expect(res.status).to.eq(200);
                    expect(res.body).to.have.property('message','Registro excluído com sucesso');
                });
            });
        });

        const fixturePath = 'cypress/fixtures/responseUserCadastrado.json';
        cy.task('deleteFile', fixturePath);
    });

    it('Deve retornar mensagem de nenhum registro excluido', () => {
        const idUsuario = 'a56asd8v16s1@dv68asd1';

        deleteUser(idUsuario).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('message', 'Nenhum registro excluído');
        });
    });
});
