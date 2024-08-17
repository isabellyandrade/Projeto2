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
exports.UsuarioRepository = void 0;
const mysql_1 = require("../database/mysql");
class UsuarioRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new UsuarioRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Usuario (
            id INT AUTO_INCREMENT PRIMARY KEY,
            pessoaId INT NOT NULL,
            senha VARCHAR(255) NOT NULL
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
    insertUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Usuario (pessoaId, senha) VALUES (?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [usuario.pessoaId, usuario.senha]);
                console.log('Usuario criado com sucesso:', resultado.insertId);
                usuario.id = resultado.insertId;
                return usuario;
            }
            catch (err) {
                console.error('Erro ao criar novo usuario:', err);
                throw err;
            }
        });
    }
    updateUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Usuario set pessoaId = ?, senha = ? where id = ?;";
            (0, mysql_1.executarComandoSQL)(query, [usuario.pessoaId, usuario.senha, usuario.id])
                .then(function (resultado) {
                return resultado;
            }).catch(function (erro) {
                return erro;
            });
        });
    }
    deleteUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM biblioteca.Usuario where id = ?;";
                const resposta = yield (0, mysql_1.executarComandoSQL)(query, [usuario.id, usuario.pessoaId, usuario.senha]);
                console.log('Usuario deletado com sucesso:', resposta);
                return resposta;
            }
            catch (err) {
                console.error('Erro ao deletar usuario:', err);
                throw err;
            }
        });
    }
    getUsuarioPorIdOuPessoa(id, pessoaId) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Usuario WHERE";
            const params = [];
            if (id) {
                query += " id = ?";
                params.push(id);
            }
            if (pessoaId) {
                query += (params.length ? " AND" : "") + " pessoaId = ?";
                params.push(pessoaId);
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
                console.error('Erro ao buscar conta:', err);
                throw err;
            }
        });
    }
    listaUsuario() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM biblioteca.Usuario";
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                return result;
            }
            catch (err) {
                console.error('Erro ao listar os usuarios:', err);
                throw err;
            }
        });
    }
}
exports.UsuarioRepository = UsuarioRepository;
