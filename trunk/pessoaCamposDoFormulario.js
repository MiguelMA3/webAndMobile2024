/***
 * Fundamentos da Orientação a Objeto
 * Para cada aluno foi separado um Objeto
 * Cada objeto tem seus atributos
 * 
 * Objetivo:
 * Descrever o objeto usando a orientação a objeto; 
 * Usar a programação para gerar os atributos do objeto como campo de entrada de texto 
 * na tela;  
 */

/**
 * Em orientação a objeto, 
 * * Usamos o mundo real na 
 *      abstração da programação  
 * 
 * Objetos são chamados de Classes;
 * * Todo objeto tem atributos, 
 *      vocês já conhecem como variaveis;
 * * Os atributos não são utilizados diretamente
 * * Os atributos são sempre encapsulados
 * * Vejam abaixo 
 */

//Objeto
var camposDoFormularioPessoa = {};

//Atributos
camposDoFormularioPessoa.id = "ID: ";
camposDoFormularioPessoa.nome = "Nome: ";
camposDoFormularioPessoa.rg = "RG: ";
camposDoFormularioPessoa.cpf = "CPF: ";
camposDoFormularioPessoa.endereco = "Endereço: ";
camposDoFormularioPessoa.estadoCivil = "Estado Civil: ";

//encapsulamento
camposDoFormularioPessoa.getId = function(){
    return camposDoFormularioPessoa.id;
}

camposDoFormularioPessoa.setId = function(id){
    camposDoFormularioPessoa.id = id;
}

camposDoFormularioPessoa.getNome = function(){
    return camposDoFormularioPessoa.nome;
}

camposDoFormularioPessoa.setNome = function(nome){
    camposDoFormularioPessoa.nome = nome;
}

camposDoFormularioPessoa.getRg = function(){
    return camposDoFormularioPessoa.rg;
}

camposDoFormularioPessoa.setRg = function(rg){
    camposDoFormularioPessoa.rg = rg;
}

camposDoFormularioPessoa.setCpf = function(cpf){
    camposDoFormularioPessoa.cpf = cpf;
}

camposDoFormularioPessoa.getCpf = function(){
    return camposDoFormularioPessoa.cpf;
}

camposDoFormularioPessoa.getEndereco = function(){
    return camposDoFormularioPessoa.endereco;
}

camposDoFormularioPessoa.setEndereco = function(endereco){
    camposDoFormularioPessoa.endereco = endereco;
}

camposDoFormularioPessoa.getEstadoCivil = function(){
    return camposDoFormularioPessoa.estadoCivil;
}

camposDoFormularioPessoa.setEstadoCivil = function(estadoCivil){
    camposDoFormularioPessoa.estadoCivil = estadoCivil;
}
