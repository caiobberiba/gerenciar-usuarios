const usuarios = [ 'Maria', 'João', 'Ana', 'Carlos' ];

function retornarUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(nome) {
       usuarios.push(nome);
}

module.exports = { retornarUsuarios, adicionarNovoUsuario };