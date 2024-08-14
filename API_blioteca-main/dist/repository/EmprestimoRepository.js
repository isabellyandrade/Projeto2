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
exports.EmprestimoRepository = void 0;
const mysql_1 = require("../database/mysql");
class EmprestimoRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new EmprestimoRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Emprestimo (
            id INT AUTO_INCREMENT PRIMARY KEY,
            livroId INT NOT NULL,
            usuarioId INT NOT NULL,
            dataEmp DATE NOT NULL,
            dataDev DATE NOT NULL
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
    insertEmprestimo(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Emprestimo (livroId, usuarioId, dataEmp, dataDev) VALUES (?, ?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
                console.log('Emprestimo realizado com sucesso, ID: ', resultado.insertId);
                emprestimo.id = resultado.insertId;
                return emprestimo;
            }
            catch (err) {
                console.error('Erro ao concluir o emprestimo:', err);
                throw err;
            }
        });
    }
    updateEmprestimo(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Emprestimo set livroId = ?, usuarioId = ?, dataEmp = ?, dataDev = ? where id = ?;";
            (0, mysql_1.executarComandoSQL)(query, [emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao, emprestimo.id])
                .then(function (resultado) {
                return resultado;
            }).catch(function (erro) {
                return erro;
            });
        });
    }
    deleteEmprestimo(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM biblioteca.Emprestimo where id = ?;";
                const resposta = yield (0, mysql_1.executarComandoSQL)(query, [emprestimo.id, emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
                console.log('Emprestimo deletado com sucesso:', resposta);
                return resposta;
            }
            catch (err) {
                console.error('Erro ao deletar emprestimo:', err);
                throw err;
            }
        });
    }
    getEmprestimoPorIdOuUsuarioOuDataEmpOuDataDev(id, usuarioId, dataEmprestimo, dataDevolucao) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Emprestimo WHERE";
            const params = [];
            if (id) {
                query += " id = ?";
                params.push(id);
            }
            if (usuarioId) {
                query += (params.length ? " AND" : "") + " usuarioId = ?";
                params.push(usuarioId);
            }
            if (dataEmprestimo) {
                query += (params.length ? " AND" : "") + " dataEmp = ?";
                params.push(dataEmprestimo);
            }
            if (dataDevolucao) {
                query += (params.length ? " AND" : "") + " dataDev = ?";
                params.push(dataDevolucao);
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
                console.error('Erro ao buscar emprestimo:', err);
                throw err;
            }
        });
    }
    filterAllEmprestimos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM biblioteca.Emprestimo";
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                return result;
            }
            catch (err) {
                console.error('Erro ao listar os emprestimos:', err);
                throw err;
            }
        });
    }
}
exports.EmprestimoRepository = EmprestimoRepository;
