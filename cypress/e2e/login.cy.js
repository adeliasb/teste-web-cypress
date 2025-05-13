/// <reference types="cypress" />


//  Funcionalidade 
describe("Login", () => {
    // Cenários
    it("Login com sucesso", () => {
// DADO
// Que o usuário acesse a página de compras QAzando
cy.visit("https://automationpratice.com.br/login")
// E adiciona os dados de login (usuário, senha)
cy.get("#user").type("qa.asbs.lab@gmail.com")
cy.get("#password").type("q@zando")

// QUANDO
// O usuário tenta logar no site
cy.get("#btnLogin").click()

// ENTÃO
// O login é realizado com sucesso
// E a mensagem é validada
cy.get("#swal2-title").should("be.visible")
cy.get("#swal2-title").should("have.text", "Login realizado")


    }

    )
it("E-mail inválido", () =>  {
    cy.visit("https://automationpratice.com.br/login")
    cy.get("#user").type("suahsuahsuah")
    cy.get("#password").type("q@zando")
    cy.get("#btnLogin").click()
    cy.get(".invalid_input").should("have.text", "E-mail inválido.")
} 

)

it("Senha inválida", () =>  {
    cy.visit("https://automationpratice.com.br/login")
    cy.get("#user").type("qa.asbs.lab@gmail.com")
    cy.get("#password").type("12345")
    cy.get("#btnLogin").click()
    cy.get(".invalid_input").should("have.text", "Senha inválida.")
} 

)
it("Senha vazia", () =>  {
    cy.visit("https://automationpratice.com.br/login")
    cy.get("#user").type("qa.asbs.lab@gmail.com")
    cy.get("#btnLogin").click()
    cy.get(".invalid_input").should("have.text", "Senha inválida.")
} 

)

it("E-mail vazio", () =>  {
    cy.visit("https://automationpratice.com.br/login")
    cy.get("#password").type("q@zando")
    cy.get("#btnLogin").click()
    cy.get(".invalid_input").should("have.text", "E-mail inválido.")
} 

)
    
}

)