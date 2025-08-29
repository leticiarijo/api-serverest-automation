export function deleteUser(idUsuario) {
    return cy.request({
        method: 'DELETE',
        url: `/usuarios/${idUsuario}`,
        headers: {
        Authorization: `Bearer ${Cypress.env('authToken')}`,
        accept: 'application/json',
        },
        failOnStatusCode: false,
    });
  }
  