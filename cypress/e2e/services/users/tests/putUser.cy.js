import { putUser } from '../requests/putUser.request.js';
import { gerarUsuarioDinamico, criarUsuario } from '../requests/postUser.request.js';
import payloadLogin200 from '../../login/payloads/login200.payload.json';

describe('Put User', () => {
    beforeEach(() => {

        cy.login();

    });

    it('Deve alterar nome e senha do usuário', () => {
        const usuario = gerarUsuarioDinamico();

        criarUsuario(usuario).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message','Cadastro realizado com sucesso');

            let idUsuarioParaAtualizar = res.body._id;

            const usuarioAtualizado = {
            nome: 'Novo nome atualizado',
            email: usuario.email,
            password: 'senha1235',
            administrador: usuario.administrador,
            };

            putUser(idUsuarioParaAtualizar, usuarioAtualizado).then((res) => {
                expect(res.status).to.eq(200);
                expect(res.body).to.have.property('message','Registro alterado com sucesso');
            });
        });
    });


    it('Não deve permitir atualizar usuário com email já utilizado por outro usuário', () => {
        const usuario = gerarUsuarioDinamico();

        criarUsuario(usuario).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message','Cadastro realizado com sucesso');

            let idUsuarioParaAtualizar = res.body._id;

            const usuarioAtualizado = {
            nome: usuario.nome,
            email: payloadLogin200.email,
            password: usuario.password,
            administrador: usuario.administrador,
            };

        putUser(idUsuarioParaAtualizar, usuarioAtualizado).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body).to.have.property('message','Este email já está sendo usado');
            });
        });
    });

    it('Deve cadastrar um novo usuário se o ID fornecido for inexistente', () => {
        const idInexistente = '60c1b0e0b0e0e0e0e0e0e0e0';
        const novoUsuario = gerarUsuarioDinamico();

        putUser(idInexistente, novoUsuario).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message','Cadastro realizado com sucesso');
        });
    });
});

