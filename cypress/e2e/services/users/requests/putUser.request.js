export function putUser(idUsuario, usuario) {
    return cy.request({
        method: 'PUT',
        url: `/usuarios/${idUsuario}`,
        headers: {
        Authorization: `Bearer ${Cypress.env('authToken')}`,
        accept: 'application/json',
        },
        body: usuario,
        failOnStatusCode: false,
    });
}
  