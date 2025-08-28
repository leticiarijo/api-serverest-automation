import payloadLogin200 from '../payloads/login200.payload.json';
import payloadLogin401 from '../payloads/login401.payload.json';

export function Postlogin200() {
  return cy.request({
    method: 'POST',
    url: 'login',
    headers: {
      accept: 'application/json',
    },
    failOnStatusCode: false,
    body: payloadLogin200,
  });
}

export function Postlogin401() {
  return cy.request({
    method: 'POST',
    url: 'login',
    headers: {
      accept: 'application/json',
    },
    failOnStatusCode: false,
    body: payloadLogin401,
  });
}
