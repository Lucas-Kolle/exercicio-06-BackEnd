/*****************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto do whatsapp
 * Data: 16/04/2026
 * Autor: Lucas Kolle
 * Versão: 1.0.4.26
 ****************************************************************************************************************************************************************************/

/*
    Instalação do EXPRESS - npm install express --save
        Dependencia responsável pela utilização do protocolo HTTP para criar uma API (A istalação deve ser feita na dominancia do app.js (raiz do projeto))

    Instalação do CORS    - npm install cors --save
        Dependencia responsável pelas configurações a serem realizadas para permissão de acesso da API (A istalação deve ser feita na dominancia do app.js (raiz do projeto))
*/

//importando as dependencias
const express = require("express")
const cors    = require("cors")

//criando um objeto para manipular o express
const app = express()

//conjunto de permissões a serem aplicados no CORS da API
const corsOption = {
    origin: ["*"], //A origrm da requisição (definido por meio do IP (192.168...), quando colocado o "*" fica livre para todas as máquinas)
    methods: "GET", //são os verbos permitidos para serem utilizados na API
    allowedHeaders: ["content-type", "Autorizations"] //são permissões do cabeçalho do CORS
}

//configurando as permissões da API atravez do CORS
app.use(cors(corsOption))

//importando funções
const functions = require("./modulo/function.js")

//Response -> Retornos da API
//Request  -> Chegadas de dados da API

//criando endPoints da API


//iniciando uma API para receber requisições
app.listen(8080, function(){ //decidindo a porta para saída do conteúdo
    console.log("API funcionando e aguardando requisições...") //vai mostrar no terminal que a API já está funcionando
})