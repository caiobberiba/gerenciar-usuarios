const { retornarUsuarios, adicionarNovoUsuario } = require ('../src/gerenciarUsuarios');
const { expect } = require ('chai');

describe ('Testar as funções de Gestão de Usuários', function() {
  it ('Validar se posso adicionar um novo nome de usuário na lista', function() {
        // 1. Adicionar novo nome na lista de usuário
        adicionarNovoUsuario('Pedro');

        // 2. Retornar a lista de usuários na caixa de lista de usuários
        const ListaDeUsuarios = retornarUsuarios();

        // 3. Comparar se o novo nome foi adicionado no fim da lista de usuários
        expect(ListaDeUsuarios.at(-1)).to.be.equal('Pedro');
    });
});

