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
exports.EmprestimoService = void 0;
const Emprestimo_1 = require("../model/Emprestimo");
const EmprestimoRepository_1 = require("../repository/EmprestimoRepository");
const UsuarioRepository_1 = require("../repository/UsuarioRepository");
const LivroRepository_1 = require("../repository/LivroRepository");
class EmprestimoService {
    constructor() {
        this.empresimoRepository = EmprestimoRepository_1.EmprestimoRepository.getInstance();
        this.usuarioRepository = UsuarioRepository_1.UsuarioRepository.getInstance();
        this.livroRepository = LivroRepository_1.LivroRepository.getInstance();
    }
    cadastrarEmprestimo(emprestimoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { livroId, usuarioId, dataEmprestimo, dataDevolucao } = emprestimoData;
            if (!livroId || !usuarioId || !dataEmprestimo || !dataDevolucao) {
                throw new Error("Informações incompletas");
            }
            const usuarios = yield this.usuarioRepository.getUsuarioPorIdOuPessoa(usuarioId, undefined);
            if (usuarios.length == 0) {
                throw new Error("Usuario não cadastrado");
            }
            const livros = yield this.livroRepository.getLivroPorIdOuTittleOuAuthorOuCategoria(livroId, undefined, undefined, undefined);
            if (livros.length == 0) {
                throw new Error("Livro não encontrado");
            }
            return this.empresimoRepository.insertEmprestimo(new Emprestimo_1.Emprestimo(undefined, livroId, usuarioId, dataEmprestimo, dataDevolucao));
        });
    }
    atualizarEmprestimo(emprestimoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const emprestimo = new Emprestimo_1.Emprestimo(emprestimoData.id, emprestimoData.livroId, emprestimoData.usuarioId, emprestimoData.dataEmprestimo, emprestimoData.dataDevolucao);
            if (!(emprestimo instanceof Emprestimo_1.Emprestimo)) {
                throw new Error("O parâmetro passado não é um objeto do tipo Emprestimo");
            }
            this.empresimoRepository.updateEmprestimo(emprestimo);
            return emprestimo;
        });
    }
    deletarEmprestimo(emprestimoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const emprestimo = new Emprestimo_1.Emprestimo(emprestimoData.id, emprestimoData.livroId, emprestimoData.usuarioId, emprestimoData.dataEmprestimo, emprestimoData.dataDevolucao);
            if (!(emprestimo instanceof Emprestimo_1.Emprestimo)) {
                throw new Error("O parâmetro passado não é um objeto do tipo Emprestimo");
            }
            const result = yield this.empresimoRepository.deleteEmprestimo(emprestimo);
            if (result.affectedRows == 0) {
                throw new Error("Emprestimo não encontrado.");
            }
            return emprestimo;
        });
    }
    getEmprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            const result = yield this.empresimoRepository.getEmprestimoPorIdOuUsuarioOuDataEmpOuDataDev(idNumber, usuarioId, dataEmprestimo, dataDevolucao);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        });
    }
    getTodosEmprestimo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresimoRepository.filterAllEmprestimos();
        });
    }
}
exports.EmprestimoService = EmprestimoService;
