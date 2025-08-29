import { gerarUsuarioDinamico, criarUsuario } from '../requests/postUser.request.js';

  
describe('POST: Criar usuário', () => {
    beforeEach(() => {

        cy.login();

    });
  
    it('Deve criar um usuário com dados dinâmicos', () => {
        const usuario = gerarUsuarioDinamico();
  
        cy.writeFile('cypress/fixtures/requestUserCadastrado.json', usuario);
  
        criarUsuario(usuario).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message','Cadastro realizado com sucesso');
        });
    });
  
    it('Deve validar email já cadastrado', () => {
        cy.fixture('requestUserCadastrado.json').then((usuarioCriado) => {
            const token = Cypress.env('authToken');
    
        cy.request({
            method: 'POST',
            url: 'usuarios',
            headers: { Authorization: `Bearer ${token}` },
            body: usuarioCriado,
            failOnStatusCode: false,
            }).then((res) => {
                expect(res.status).to.eq(400);
                expect(res.body).to.have.property('message','Este email já está sendo usado');
            });
        });
    
        const fixturePath = 'cypress/fixtures/requestUserCadastrado.json';
        
        cy.task('deleteFile', fixturePath);
    });
  });
  