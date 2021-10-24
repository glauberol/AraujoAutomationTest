Feature: Busca de Produtos

    Como usuário não autenticado
    Posso realizar busca por produtos
    Para encontrar produtos desejados

@focus 
Scenario: Busca por produto digitando o nome do produto incorretamente

    Given que sou um cliente não autenticado acessando o site da Araujo
    When desejo realizar uma busca por tylenol, mas digito a palavra incorretamente
    Then visualizo a mensagem 'Você Quis Dizer "Tylenol"'
    When seleciono o primeiro produto encontrado
    Then visualizo a imagem e as informações do produto