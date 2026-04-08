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

console.log(getListarDadosContatos(11987876567))