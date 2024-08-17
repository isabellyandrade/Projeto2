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
exports.PessoaRepository = void 0;
const mysql_1 = require("../database/mysql");
class PessoaRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new PessoaRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Pessoa (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertPessoa(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)("INSERT INTO biblioteca.Pessoa (name, email) VALUES (?,?)", [pessoa.name, pessoa.email]);
                pessoa.id = resultado.insertId;
                console.log('Pessoa criada com sucesso:', pessoa);
                return pessoa;
            }
            catch (err) {
                console.error('Erro ao criar uma pessoa: ', err);
                throw err;
            }
        });
    }
    updatePessoa(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "UPDATE biblioteca.Pessoa set name = ?, email = ? where id = ?;";
                yield (0, mysql_1.executarComandoSQL)(query, [pessoa.name, pessoa.email, pessoa.id]);
                console.log('Pessoa atualizada com sucesso:', pessoa.id);
            }
            catch (err) {
                console.error('Erro ao atualizar pessoa:', err);
                throw err;
            }
        });
    }
    deletePessoa(pessoaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM biblioteca.Pessoa where id = ?;";
                yield (0, mysql_1.executarComandoSQL)(query, [pessoaId]);
                console.log('Pessoa deletada com sucesso, ID: ', pessoaId);
            }
            catch (err) {
                console.error(`Falha ao deletar a pessoa`, err);
                throw err;
            }
        });
    }
    getPessoaByNameEmailId(name, email, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Pessoa WHERE";
            const params = [];
            if (name) {
                query += " name = ?";
                params.push(name);
            }
            if (email) {
                query += (params.length ? " AND" : "") + " email = ?";
                params.push(email);
            }
            if (id) {
                query += (params.length ? " AND" : "") + " id = ?";
                params.push(id);
            }
            if (params.length === 0) {
                throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
            }
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, params);
                console.log('Busca efetuada com sucesso:', result);
                return result;
            }
            catch (err) {
                console.error('Erro ao buscar pessoa:', err);
                throw err;
            }
        });
    }
    filterAllPessoas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM biblioteca.Pessoa";
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return resultado;
            }
            catch (err) {
                console.error(`Falha ao listar as pessoas`, err);
                throw err;
            }
        });
    }
}
exports.PessoaRepository = PessoaRepository;
