import { describe } from 'node:test';
import { validarLogin } from '../src/login_usuario.js';
import assert from 'node:assert';

describe('Testes do modulo login', () => {
    describe('Testes de validação de login', () => {
      it('Deve exibir mensagem de sucesso "Login realizado com sucesso"', () => {
       const retorno = validarLogin('davi@site.com', 'abc');

        assert.equal(retorno, 'Login realizado com sucesso.');
      });

      it('Deve exibir a mensagem "Usuário não encontrado na base" quando o usuário está com a senha incorreta', () => {
       const retorno = validarLogin('marcos@site.com', 'abc');

        assert.equal(retorno, 'Usuário não encontrado na base');
      });
        
      it('Deve exibir a mensagem "Usuário não encontrado na base" quando o usuário não está cadastrado no sistema', () => {
       const retorno = validarLogin('maricota@site.com', 'abc');

        assert.equal(retorno, 'Usuário não encontrado na base');
      });
        

    });
});