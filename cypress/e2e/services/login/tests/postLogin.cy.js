import * as PostLogin from '../requests/postLogins.request';

describe('POST: Validar login', () => {
 
    it('Deve fazer o login e retonar sucesso 200', () => {
        
        PostLogin.Postlogin200().then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('authorization');

            cy.writeFile('cypress/fixtures/token.json', {
            token: res.body.authorization,
            });
        });
    });

    it('Deve fazer o login e retonar erro 401', () => {
        
        PostLogin.Postlogin401().then((res) => {
            expect(res.status).to.eq(401)
            expect(res.body).to.have.property('message', 'Email e/ou senha inválidos');
        });
    });

});

