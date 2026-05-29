const usuarios = [
    { 
        id: 1, 
        nome: "admin", 
        email: "admin@site.com", 
        senha: "123", 
        expirado: false 
    },
    { 
        id: 2, 
        nome: "Davi", 
        email: "davi@site.com", 
        senha: "abc", 
        expirado: false 
    },
    { 
        id: 3, 
        nome: "Marcos", 
        email: "marcos@site.com",
        senha: "xyz", 
        expirado: true 
    }
];


export function validarLogin(email, senha){

 for (let usuario of usuarios){
    if (usuario.email == email && usuario.senha == senha){
        return 'Login realizado com sucesso.';
    }
 }

 return 'Usuário não encontrado na base';
}