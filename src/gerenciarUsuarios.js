const usuarios = [ 
  { 
    nome: 'Maria', 
    email: 'maria@email.com'
  }, 
  { 
    nome: 'João', 
    email: 'joao@email.com' 
  }, 
  { 
    nome: 'Ana', 
    email: 'ana@email.com' 
  }, 
  { 
    nome: 'Carlos', 
    email: 'carlos@email.com' 
  } 
];

function retornarUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(usuario) {
  usuarios.push(usuario);
}

module.exports = { 
  retornarUsuarios, 
  adicionarNovoUsuario 
};