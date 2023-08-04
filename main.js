'use strict'

//declaração de variável:

// 3 - var -> mutável -> global (não usar)
// 2 - let -> mutável -> bloco
// 1 - const -> imutável -> bloco

function trocarTitulo (){
    const titulo = document.getElementById('titulo')
    const tituloDigitado = prompt('Digite um titulo')
    if(tituloDigitado == ''){
        titulo.textContent = 'SENAI'
    }else{
        titulo.textContent = tituloDigitado
        titulo.classList.add('verde')
    }
    
}

const botaoTrocarTitulo = document.getElementById('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)




function cadastrar(){
    
    const nome = document.getElementById('nome')
    const nomeDigitado = prompt('Digite o seu nome')
    nome.textContent = 'Nome: ' + nomeDigitado

    const cidade = document.getElementById('cidade')
    const cidadeDigitada = prompt('Digite a sua cidade')
    cidade.textContent = 'Cidade: ' +  cidadeDigitada

    const media = document.getElementById('media')
    const mediaDigitada = prompt('Digite a sua media')
    media.textContent = 'Média:' + mediaDigitada

    if(mediaDigitada < 7){
        media.classList.add('vermelho')
        const vermelho = document.getElementById('resultado')
        vermelho.textContent = 'Você está com uma nota baixa!'
    }else{
        media.classList.add('azul')
        const azul = document.getElementById('resultado')
        azul.textContent = 'Você está com uma nota boa!'
    }
}

function fim(){

   
}

const botaoCadastrar = document.getElementById('cadastrar')
botaoCadastrar.addEventListener('click', cadastrar)