"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRequestDto = void 0;
class UsuarioRequestDto {
    constructor(pessoaId, senha) {
        this.pessoaId = pessoaId || 0;
        this.senha = senha || '';
    }
}
exports.UsuarioRequestDto = UsuarioRequestDto;
