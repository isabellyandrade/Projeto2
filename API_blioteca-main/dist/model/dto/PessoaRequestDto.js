"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaRequestDto = void 0;
class PessoaRequestDto {
    constructor(name, email) {
        this.name = name || '';
        this.email = email || '';
    }
}
exports.PessoaRequestDto = PessoaRequestDto;
