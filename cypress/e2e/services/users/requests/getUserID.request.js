export function buscarporID(id) {
    if (id) {
        return cy.request({
            method: 'GET',
            url: `usuarios/${id}`,
            headers: {
            Authorization: `Bearer ${Cypress.env('authToken')}`,
            accept: 'application/json',
            },
            failOnStatusCode: false,
        });
    } else {
        return cy.fixture('responseUserCadastrado.json').then((id) => {
            return cy.request({
                method: 'GET',
                url: `usuarios/${id._id}`,
                headers: {
                Authorization: `Bearer ${Cypress.env('authToken')}`,
                accept: 'application/json',
                },
                failOnStatusCode: false,
            });
        });
    }
  }
  