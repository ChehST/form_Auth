import React from 'react'
import Home from './page'

describe('App successfully starts', () => {
  it('Home page renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
  })
})