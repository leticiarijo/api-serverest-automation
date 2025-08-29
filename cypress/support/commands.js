import payloadLogin200 from '../e2e/services/login/payloads/login200.payload.json';

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: '/login',
    headers: { accept: 'application/json' },
    body: payloadLogin200,
    }).then((res) => {
      expect(res.status).to.eq(200);
      Cypress.env('authToken', res.body.authorization);
  });
});