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
const funcoes = require("./modulo/function.js")

//Response -> Retornos da API
//Request  -> Chegadas de dados da API

//CRIANDO ENDPOINTS DA API

//retorna todos os dados
app.get("/v1/whatsapp/dados", function(request, response){
    //criando variável para guardar a saída da função
    let listarDados = funcoes.getListarDados()

    response.status(200)        //enviando o status code
    response.json(listarDados)  //enviando o json
})

//retorna os dados do usuário filtrando pelo número
app.get("/v1/whatsapp/dados/usuario/:numero", function(request, response){
    //criando variáveis
    let numeroTelefone = request.params.numero
    let listarDadosUsuario = funcoes.getListarDadosUsuario(numeroTelefone)

    //tratativa de erros
    if(listarDadosUsuario){
        response.status(200)
        response.json(listarDadosUsuario)
    }else{
        response.status(404)
        response.json({"message": "Usuário não encontrado!"})
    }
})

//retorna os dados de todos os contatos de um usuário filtrando pelo número
app.get("/v1/whatsapp/dados/contatos/usuario/:numero", function(request, response){
    let numeroTelefone = request.params.numero
    let listarDadosContatos = funcoes.getListarDadosContatos(numeroTelefone)

    //tratando erros
    if(listarDadosContatos){
        response.status(200)
        response.json(listarDadosContatos)
    }else{
        response.status(404)
        response.json({"message": "Usuário não encontrado!"})
    }
})

//retorna todas as mensagens de um usuario e um contato específico
app.get("/v1/whatsapp/dados/mensagens/usuario/contato/", function(request, response){
    let numeroUsuario = request.query.numero
    let nomeContato = request.query.nome
    let mensagensContato = funcoes.getListarMensagensContato(numeroUsuario, nomeContato)

    if(mensagensContato){
        response.status(200)
        response.json(mensagensContato)
    }else{
        response.status(404)
        response.json({"message": "Os dados enviados não estão corretos!"})
    }
})

//retorna todas as mensagens do usuário
app.get("/v1/whatsapp/dados/mensagens/usuario/:numero", function(request, response){
    let numeroUsuario = request.params.numero
    let mensagensUsuario = funcoes.getListarMensagens(numeroUsuario)

    if(mensagensUsuario){
        response.status(200)
        response.json(mensagensUsuario)
    }else{
        response.status(404)
        response.json({"message": "Usuario não encontrado"})
    }
})

//retorna uma conversa expecífica filtrando pelo numero, nome e frase
app.get("/v1/whatsapp/dados/mensagens/chave",function(request, response){
    let numeroUsuario = request.query.numero
    let nomeContato = request.query.nome
    let fraseChave = request.query.frase
    let mensagemChave = funcoes.getListarMensagemChave(numeroUsuario, nomeContato, fraseChave)

    if(mensagemChave){
        response.status(200)
        response.json(mensagemChave)
    }else{
        response.status(404)
        response.json({"message": "não encontrei nada com isso"})
    }
})

//retorna os endPoints disponíveis e uma pequena descrição
app.get("/v1/whatsapp/help", function(request, response){
    //criando documentação auxiliar da API
    let helpAPI = {
        "API-description": "API para manipular dados do watsapp",
        "date": "2026-04-16",
        "Development": "Lucas Kolle",
        "email": "lucaskolle2020@gmail.com",
        "Version": "1.0",
        "endPoints": [
            {
                "id": 1,
                "Rota": "/v1/whatsapp/dados",
                "Description": "Retorna todos os dados da API."
            },
            {
                "id": 2,
                "Rota": "/v1/whatsapp/dados/usuario/:numero",
                "Description": "Retorna os dados do usuário, filtrando pelo número."
            },
            {
                "id": 3,
                "Rota": "/v1/whatsapp/dados/contatos/usuario/:numero",
                "Description": "Retorna os dados dos contatos do usuário, filtrando pelo número"
            },
            {
                "id": 4,
                "Rota": "/v1/whatsapp/dados/contatos/usuario/:numero",
                "Description": "Retorna todas as mensagens encontradas de um usuário, filtrando pelo número"
            },
            {
                "id": 5,
                "Rota": "/v1/whatsapp/dados/mensagens/usuario/contato/?numero=(número do usuário)&nome=(nome do contato)",
                "Description": "Retorna todas as mensagens de um usuário com um contato expecífico"
            },
            {
                "id": 6,
                "Rota": "/v1/whatsapp/dados/mensagens/chave/?numero=(número do usuário)&nome=(nome do contato)&frase=(frase que você deseja encontrar)",
                "Description": "Retorna uma mensagem específica filtrando pelo número, nome e frase."
            }
        ]
    }

    response.status(200)
    response.json(helpAPI)
})

//iniciando uma API para receber requisições
app.listen(8080, function(){ //decidindo a porta para saída do conteúdo
    console.log("API funcionando e aguardando requisições...") //vai mostrar no terminal que a API já está funcionando
})