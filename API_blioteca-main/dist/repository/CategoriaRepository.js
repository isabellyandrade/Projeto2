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
exports.CategoriaRepository = void 0;
const mysql_1 = require("../database/mysql");
class CategoriaRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new CategoriaRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Categoria (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
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
    insertCategory(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)("INSERT INTO biblioteca.Categoria (name) VALUES (?)", [categoria.name]);
                categoria.id = resultado.insertId;
                console.log('Categoria criada com sucesso:', categoria);
                return categoria;
            }
            catch (err) {
                console.error('Erro ao criar uma categoria: ', err);
                throw err;
            }
        });
    }
    updateCategory(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "UPDATE biblioteca.Categoria set name = ? where id = ?;";
                yield (0, mysql_1.executarComandoSQL)(query, [categoria.name, categoria.id]);
                console.log('Categoria atualizada com sucesso:', categoria.id);
            }
            catch (err) {
                console.error('Erro ao atualizar categoria:', err);
                throw err;
            }
        });
    }
    deleteCategory(categoriaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM biblioteca.Categoria where id = ?;";
                yield (0, mysql_1.executarComandoSQL)(query, [categoriaId]);
                console.log('Categoria deletada com sucesso, ID: ', categoriaId);
            }
            catch (err) {
                console.error(`Falha ao deletar a categoria`, err);
                throw err;
            }
        });
    }
    getCategoriaByIdOuName(name, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Categoria WHERE";
            const params = [];
            if (name) {
                query += " name = ?";
                params.push(name);
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
    filterAllCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM biblioteca.Categoria";
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return resultado;
            }
            catch (err) {
                console.error(`Falha ao listar as categorias`, err);
                throw err;
            }
        });
    }
}
exports.CategoriaRepository = CategoriaRepository;
