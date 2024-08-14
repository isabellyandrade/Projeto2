"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, pessoaId, senha) {
        this.id = id || 0;
        this.pessoaId = pessoaId || 0;
        this.senha = senha || '';
    }
}
exports.Usuario = Usuario;
