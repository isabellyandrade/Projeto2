"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const Pessoa_1 = require("../model/Pessoa");
const PessoaRepository_1 = require("../repository/PessoaRepository");
class PessoaService {
    constructor() {
        this.pessoaRepository = PessoaRepository_1.PessoaRepository.getInstance();
    }
    cadastrarPessoa(pessoaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = pessoaData;
            if (!name || !email) {
                throw new Error("Informações incompletas");
            }
            let pessoa = new Pessoa_1.Pessoa(undefined, name, email);
            const PessoasEncontradas = yield this.pessoaRepository.getPessoaByNameEmailId(undefined, pessoa.email);
            if (PessoasEncontradas.length > 0) {
                throw new Error("Já existe uma pessoa cadastrado com esse email");
            }
            return this.pessoaRepository.insertPessoa(pessoa);
        });
    }
    atualizarPessoa(pessoaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, email } = pessoaData;
            if (!id || !name || !email) {
                throw new Error("Informações incompletas");
            }
            const pessoa = new Pessoa_1.Pessoa(id, name, email);
            const PessoasEncontradas = yield this.pessoaRepository.getPessoaByNameEmailId(undefined, undefined, id);
            if (PessoasEncontradas.length == 0) {
                throw new Error("Pessoa informada inexistente.");
            }
            this.pessoaRepository.updatePessoa(pessoa);
            return pessoa;
        });
    }
    deletarPessoa(pessoaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, email } = pessoaData;
            if (!id || !name || !email) {
                throw new Error("Informações incompletas");
            }
            if (typeof id !== 'number') {
                throw new Error("Informe um ID correto.");
            }
            const pessoa = new Pessoa_1.Pessoa(id, name, email);
            const PessoasEncontradas = yield this.pessoaRepository.getPessoaByNameEmailId(pessoa.name, pessoa.email, pessoa.id);
            if (PessoasEncontradas.length == 0) {
                throw new Error("Pessoa informada inexistente.");
            }
            const result = yield this.pessoaRepository.deletePessoa(pessoa.id);
            return pessoa;
        });
    }
    getPessoa(id, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            const result = yield this.pessoaRepository.getPessoaByNameEmailId(name, email, idNumber);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        });
    }
    getPessoas() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pessoaRepository.filterAllPessoas();
        });
    }
}
exports.PessoaService = PessoaService;
