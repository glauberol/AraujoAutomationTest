const elemento = require('./elements').ELEMENTS;

class buscarProdutos {

    acessarSite(){
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit(elemento.url)
            cy.wait(10000)
    }

    pageInicial(){

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.get(elemento.fieldBuscar)
            .first()
            .should('be.visible')
            .type('tilenol')

        cy.get(elemento.buttonBuscar)
            .first()
            .click();
    }
    pageResultadoBusca(){

        cy.get(elemento.produto)
            .first()
            .click({force: true});
 
    }
    pageProduto(){

        cy.get(elemento.imagem)
            .should('be.visible')

        cy.get(elemento.nomeProduto)
            .should('be.visible')
            .contains('Tylenol 500mg 20 Comprimidos')

        cy.get(elemento.preco)
            .should('be.visible')
            .contains('R$ 22,72')

        cy.get(elemento.buttonCarrinho)
            .should('be.visible')

        cy.get(elemento.linkAddLista)
            .should('be.visible')

        cy.get(elemento.linkInformacoesProduto)
            .should('be.visible')

        cy.get(elemento.caracteristicasTitulo)
            .should('have.text',
                'FabricanteMarcaIndicaçãoComposiçãoContraindicaçãoRMS')
    
        cy.get(elemento.caracteristicasTexto)
            .contains('Janssen-Cilag')

        cy.get(elemento.caracteristicasTexto)
            .contains('Tylenol')

        cy.get(elemento.caracteristicasTexto)
            .contains('Redução da febre e alívio temporário de dores leves a moderadas, tais como: dores associadas a resfriados comuns, dor de cabeça, dor de dente, dor nas costas, dores musculares, dores leves associadas a artrites e cólicas menstruais.')
        
        cy.get(elemento.caracteristicasTexto)
            .contains('PARACETAMOL (500MG)')

        cy.get(elemento.caracteristicasTexto)
            .contains('Casos de alergia ao paracetamol ou a qualquer componente da fórmula.')
        
        cy.get(elemento.caracteristicasTexto)
            .contains('1.1236.3326.044-5')

    }
}

export default new buscarProdutos();