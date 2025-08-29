import userPayload from '../payloads/user.payload.json';
import { faker } from '@faker-js/faker';

export function gerarUsuarioDinamico() {
  return {
    ...userPayload,
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(10),
  };
}

export function criarUsuario(usuario) {
  return cy.request({
    method: 'POST',
    url: 'usuarios',
    headers: {
      Authorization: `Bearer ${Cypress.env('authToken')}`,
      accept: 'application/json',
    },
    body: usuario,
  });
}
