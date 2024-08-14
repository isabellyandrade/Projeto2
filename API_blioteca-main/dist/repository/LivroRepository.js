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
exports.LivroRepository = void 0;
const mysql_1 = require("../database/mysql");
class LivroRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new LivroRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            categoryId INT NOT NULL
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
    insertLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Livro (title, author, categoryId) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [livro.title, livro.author, livro.categoryId]);
                console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
                livro.id = resultado.insertId;
                return livro;
            }
            catch (err) {
                console.error('Erro ao inserir o livro:', err);
                throw err;
            }
        });
    }
    updateLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Livro set title = ?, author = ?, categoryId = ? where id = ?;";
            (0, mysql_1.executarComandoSQL)(query, [livro.title, livro.author, livro.categoryId, livro.id])
                .then(function (resultado) {
                return resultado;
            }).catch(function (erro) {
                return erro;
            });
        });
    }
    deleteLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM biblioteca.Livro where id = ?;";
                const resposta = yield (0, mysql_1.executarComandoSQL)(query, [livro.id, livro.title, livro.author, livro.categoryId]);
                console.log('Livro deletado com sucesso:', resposta);
                return resposta;
            }
            catch (err) {
                console.error('Erro ao deletar livro:', err);
                throw err;
            }
        });
    }
    getLivroPorIdOuTittleOuAuthorOuCategoria(id, title, author, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Livro WHERE";
            const params = [];
            if (id) {
                query += " id = ?";
                params.push(id);
            }
            if (title) {
                query += (params.length ? " AND" : "") + " title = ?";
                params.push(title);
            }
            if (author) {
                query += (params.length ? " AND" : "") + " author = ?";
                params.push(author);
            }
            if (categoryId) {
                query += (params.length ? " AND" : "") + " categoryId = ?";
                params.push(categoryId);
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
                console.error('Erro ao buscar livro:', err);
                throw err;
            }
        });
    }
    filterAllLivro() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM biblioteca.Livro";
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                return result;
            }
            catch (err) {
                console.error('Erro ao listar os livros:', err);
                throw err;
            }
        });
    }
}
exports.LivroRepository = LivroRepository;
