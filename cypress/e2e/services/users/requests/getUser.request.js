export function listar() {
    return cy.request({
        method: 'GET',
        url: 'usuarios',
        headers: {
        Authorization: `Bearer ${Cypress.env('authToken')}`,
        accept: 'application/json',
        },
        failOnStatusCode: false,
    });
  }
  