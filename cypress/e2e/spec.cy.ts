describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('My Game Video Store')
  })

  it('Visits the initial project page', () => {


    cy.visit('/')
    cy.contains('a', 'Home').click()
    cy.wait(1000)
    cy.contains('a', 'Catalog').click()
    cy.wait(3000)
    cy.document().then((doc) => {
      console.log("Lucas")
      console.log(doc.body.innerHTML)
    })

    cy./*get('.product').*/contains('Call')
    cy.get('#nameFilter').type('te')
    cy.contains('Tetris')
    cy.get('#platform').select('Steam')
    cy.contains('Tetris')
  })
})
