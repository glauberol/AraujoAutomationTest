import buscar_produtos from '../../support/pages/buscar_produtos';


Given(/^que sou um cliente não autenticado acessando o site da Araujo$/, () => {
	
	buscar_produtos
		.acessarSite();
	
});

When(/^desejo realizar uma busca por tylenol, mas digito a palavra incorretamente$/, () => {

	buscar_produtos
		.pageInicial();

});

Then(/^visualizo a mensagem 'Você Quis Dizer "Tylenol"'$/, (args1) => {

	cy.get('li[typeof="v:Breadcrumb"]')
		.contains('Você quis dizer "tylenol"')

});


When(/^seleciono o primeiro produto encontrado$/, () => {
	
	buscar_produtos
		.pageResultadoBusca();

});


Then(/^visualizo a imagem e as informações do produto$/, () => {

	buscar_produtos
		.pageProduto();

});
