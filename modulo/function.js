/*****************************************************************************************************************************************************************************
 * Objetivo: Arquivo para guardar as funções para manipular os dados em ARRAY e JASON
 * Data: 08/04/2026
 * Autor: Lucas Kolle
 * Versão: 1.0.4.26
 ****************************************************************************************************************************************************************************/

//importando Json com as informações
const arquivoContatos = require("./contatos.js")

//função para listar todos os dados de todos os usuarios
const getListarDados = function(){
    let usuarios = []
    let dadosUsuarios = {}

    //estrutura de repetição para rodar o array
    arquivoContatos.contatos["whats-users"].forEach(function(itemWatsUsers){

        //puxando dadados pra dentro dos Json's e Array's
        dadosUsuarios.id = itemWatsUsers.id
        dadosUsuarios.account = itemWatsUsers.account
        dadosUsuarios.nickname = itemWatsUsers.nickname
        dadosUsuarios["created-since"] = itemWatsUsers["created-since"]
        dadosUsuarios["profile-image"] = itemWatsUsers["profile-image"]
        dadosUsuarios.contacts = itemWatsUsers.contacts
        dadosUsuarios.number = itemWatsUsers.number
        dadosUsuarios.background = itemWatsUsers.background
        usuarios.push(dadosUsuarios)
    })

    //condicional de retorno
    if(usuarios)
        return usuarios
    else
        return false

}

//função que retorna os dados do usuario com base no numero digitado
const getListarDadosUsuario = function(numero){
    let numeroUsuario = Number(numero)
    let usuario = {}
    let status = false

    //estrutura de repetição para rodar o array usando o for o
    arquivoContatos.contatos["whats-users"].forEach(function(itemWatsUsers){

        //filtro pelo numero
        if(Number(itemWatsUsers.number) == Number(numeroUsuario)){
            usuario.account = itemWatsUsers.account
            usuario.nickname = itemWatsUsers.nickname
            usuario["created-since"] = itemWatsUsers["created-since"]
            usuario["profile-image"] = itemWatsUsers["profile-image"]
            usuario.number = itemWatsUsers.number
            usuario.background = itemWatsUsers.background
            usuario.contacts = itemWatsUsers.contacts
            status = true
        }
    })

    //tratando retorno
    if(status)
        return usuario
    else
        return false
}

//função para listar os dados dos contatos do usuario
const getListarDadosContatos = function(numero){
    let numeroUsuario = Number(numero)
    let contatos = []
    let retornoFuncao = {"number": numeroUsuario, contatos}
    let status = false

    //estrutura de repetição
    arquivoContatos.contatos["whats-users"].forEach(function(itemWatsUsers){

        //filtro pelo numero
        if(Number(numeroUsuario) == Number(itemWatsUsers.number)){

            //estrutura de repetição para entrar nos contatos do ususario
            itemWatsUsers.contacts.forEach(function(itemContacts){
                //criando a variável dentro do for each
                let dadosContatos = {}

                dadosContatos.name = itemContacts.name
                dadosContatos.description = itemContacts.description
                dadosContatos.description = itemContacts.description
                dadosContatos.image = itemContacts.image
                dadosContatos.messages = itemContacts.messages
                status = true
                contatos.push(dadosContatos)
            })
        }
    })

    //tratando retorno
    if(status)
        return retornoFuncao
    else
        return false
}

//função para retornar todas as mensagens de um usuario
const getListarMensagens = function(numero){
    let numeroUsuario = Number(numero)
    let dadosMensagens = {"number": numeroUsuario}
    let contatos = []
    let status = false

    //estrutura de repetição para rodar o primeiro array
    arquivoContatos.contatos["whats-users"].forEach(function(itemWatsUsers){
        
        //filtro pelo numero
        if(Number(numeroUsuario) == Number(itemWatsUsers.number)){

            //estrutura de repetição para entrar nos contatos
            itemWatsUsers.contacts.forEach(function(itemContacts){
                contatos.push(itemContacts.name)

                //estrutura de repetição para entrar nas mensagens
                itemContacts.messages.forEach(function(itemMessages){
                    let mensagens = {}
                    mensagens.sender = itemMessages.sender
                    mensagens.content = itemMessages.content
                    mensagens.time = itemMessages.time
                    contatos.push(mensagens)
                    dadosMensagens.contatos = contatos
                    status = true
                })


            })
        }
    })

    //tratando saida
    if(status)
        return dadosMensagens
    else
        return false
}

//função para listar todas as mensagens de um usuario e um contato
const getListarMensagensContato = function(numero, nome){
    let numeroUsuario = Number(numero)
    let nomeContato = nome
    let status = false
    let mensagens = {}
    let mensagensContato = []

    //estrutura de repetição
    arquivoContatos.contatos["whats-users"].forEach(function(itemWatsUsers){

        //primeiro filtro
        if(Number(numeroUsuario) == Number(itemWatsUsers.number)){

            mensagens.usuario = itemWatsUsers.account
            //segunda estrutura de repetição
            itemWatsUsers.contacts.forEach(function(itemContacts){

                //segundo filtro
                if(String(nomeContato).toUpperCase() == String(itemContacts.name).toUpperCase()){

                    //terceira estrutura de repetição
                    itemContacts.messages.forEach(function(itemMessages){
    
                    let mensagem = {}
                    mensagem.sender = itemMessages.sender
                    mensagem.content = itemMessages.content
                    mensagem.time = itemMessages.time
                    mensagensContato.push(mensagem)
                    mensagens.mensagensContato = mensagensContato
                    status = true

                    })
                }
            })
        }
    })

    if(status)
        return mensagens
    else
        return false
}

const getListarMensagemChave = function(numero, nome, chave){
    let numeroUsuario = Number(numero)
    let nomeContato = String(nome)
    let palavraChave = String(chave)
    let status = false
    let mensagens = {}
    let mensagemChave = []

    //primeira estrututra de repetição
    arquivoContatos.contatos["whats-users"].forEach(function(itemWatsUsers){

        //primeiro filtro
        if(Number(numeroUsuario) == Number(itemWatsUsers.number)){

            mensagens.usuario = itemWatsUsers.account

            //segunda estrututura de repetição
            itemWatsUsers.contacts.forEach(function(itemContacts){

                //segundo filtro
                if(String(nomeContato).toUpperCase() == String(itemContacts.name).toUpperCase()){

                    //terceira estrutura de repetição
                    itemContacts.messages.forEach(function(itemMessages){

                        //terceiro filtro
                        if(String(palavraChave).toUpperCase() == String(itemMessages.sender) || String(palavraChave).toUpperCase() == String(itemMessages.content).toUpperCase()){
                            let mensagem = {}
                            mensagem.sender = itemMessages.sender
                            mensagem.content = itemMessages.content
                            mensagem.time = itemMessages.time
                            mensagemChave.push(mensagem)
                            mensagens["palavra-chave"] = mensagemChave
                            status = true

                        }
                    })
                }
            })
        }
    })

    if(status)
        return mensagens
    else
        return false
}



console.log(getListarMensagensContato("11987876567", "Ana Maria", "Hello"))