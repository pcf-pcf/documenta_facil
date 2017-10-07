/*
  _____                                        _           __           _ _ 
 |  __ \                                      | |         / _|         (_) |
 | |  | | ___   ___ _   _ _ __ ___   ___ _ __ | |_ __ _  | |_ __ _  ___ _| |
 | |  | |/ _ \ / __| | | | '_ ` _ \ / _ \ '_ \| __/ _` | |  _/ _` |/ __| | |
 | |__| | (_) | (__| |_| | | | | | |  __/ | | | || (_| | | || (_| | (__| | |
 |_____/ \___/ \___|\__,_|_| |_| |_|\___|_| |_|\__\__,_| |_| \__,_|\___|_|_|

Criado por: Paulo Frossard
Versão: 0.1 Alpha
FTP: pcf.cursofatum.com.br

*/

// variaveis globais
var num; 
var titulo_pag;
function cria_html(titulo, conteudo) { //Gera codigo html de cada postagem
	var html_titulo, html_cont;
	html_titulo = "<article><p><h1>"+titulo+"</h1>"; // Pega titulo do artigo
	html_cont = "<div class='styles'>" + conteudo + "</p></div></article>"; // Pega conteudo do artigo
	cont_final = html_titulo + html_cont; // Junta titulo e artigo já em html
	return cont_final;
};

function final(){ //Função com o objetivo de gerar o codigo html final para o usuario apenas copiar e já poder usar
	titulo_pag = document.getElementById('titulo_pag').value; // Pega valor do titulo da pagina
	var post = []; //Armazena codigo gerado pela função cria_html
	var final = ""; //Cria variavel do tipo string vazia
	var corpo = []; // Cria array responsavel pelo codigo html final
	/*corpo html*/
	corpo[1] = "<!DOCTYPE html><html lang='pt-br'><head><meta charset='utf-8'><title>"+titulo_pag+"</title><meta name='viewport' content='width=device-width, initial-scale=1'><link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet'><link rel='stylesheet' href='http://pcf.cursofatum.com.br/kurupira/global.css'><link rel='stylesheet' href='http://pcf.cursofatum.com.br/kurupira/styleguide.css'></head><body><div id='head'><h1>"+titulo_pag+"</h1></div><section><div id='conteudo'>"
	corpo[2] = "</div></section></body></html>" 
	/*fim corpo*/
	for (i=0; i<=num-1 ;i++){
		post[i+1] = i+1; //
		post[i] = cria_html (document.getElementById('Titulo_'+post[i+1]).value , document.getElementById('cont_'+post[i+1]).value);
	}
	final += corpo[1];
	for (i=0; i<=num-1; i++){
		final += post[i];
	}
	final += corpo[2];
	corpo[3] = "<textarea>"+final+"</textarea>"
	document.getElementById('conteudo').innerHTML = corpo[3];
};
			
function posts(){ //Função que gera toda parte editavel 
	var temp = document.getElementById('num_post').value; // Pega o valor do input do numero de postagens 
	num = Number(temp); //Transforma em um numero
	if (isNaN(num) || num < 0 || num ==0){ //Avisa caso não seja um numero positivo
		alert("Somente numeros positivos aqui!");
	}
	else{
		var art_1= [];//Aqui é impresso os valores da array para gerar um codigo html limpo
		var confirma = "<center><button type='submit' onclick='final()'> GERAR DOCUMENTAÇÃO </button></center>"
		var art= []; //Recebe o codigo html e atribui logo em seguida um valor para cada item 				
		var padrao = "<p>Escreva seu texto usando tags html</p> Não se importe se o título ficar cortado!"; //Valor textarea
		var titulo = "<center>Qual o nome da ferramenta? <input type='text' id='titulo_pag' value='Nome da ferramenta + versão'/></center><br>";
		art_1 += titulo;
		for (i=0; i<=num-1 ; i++){ //Gera a grade da documentação atribuindo uma id especifica 
			art[i+1]= i+1;
			art[i] = "<article id='art_"+ art[i+1] +"'><h1><input type='text' id='Titulo_"+ art[i+1] +"' value='Título "+ art[i+1] +"'/></h1><div class='styles'><textarea id='cont_"+ art[i+1] +"'>"+ padrao +"</textarea></div></article>";
		}
		for (i=0; i<=num-1; i++){ //Imprime a grade de maneira completa ao usuario, sem as "," de separação
			art_1 += art[i]; 
		}
		art_1 += confirma;
		document.getElementById('conteudo').innerHTML = art_1;
	}
};