import * as getUserID from '../requests/getUserID.request';
import {   gerarUsuarioDinamico, criarUsuario } from '../requests/postUser.request.js';


describe('GET(ID): Buscar usuário por ID', () => {
    beforeEach(() => {
        
        cy.login(); 

    });

    it('Deve buscar um usuário pelo ID', () => {
        const usuario = gerarUsuarioDinamico();

        criarUsuario(usuario).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message','Cadastro realizado com sucesso');

            const fixturePath = 'cypress/fixtures/responseUserCadastrado.json';
            cy.writeFile(fixturePath, res.body);
        });

        getUserID.buscarporID().should((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('_id');
        });
    });

    it('Deve retornar mensagem de usuário não encontrado', () => {
        const fixturePath = 'responseUserCadastrado.json';

        cy.fixture(fixturePath).then((id) => {
            let idAlterado = id._id;

            idAlterado = idAlterado.slice(0, -2) + 'A0';

            getUserID.buscarporID(idAlterado).should((res) => {
                expect(res.status).to.eq(400);
                expect(res.body).to.have.property('message', 'Usuário não encontrado');
            });
        });

        cy.task('deleteFile', `cypress/fixtures/${fixturePath}`);
    });
});
