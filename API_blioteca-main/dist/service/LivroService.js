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
exports.LivroService = void 0;
const Livro_1 = require("../model/Livro");
const LivroRepository_1 = require("../repository/LivroRepository");
const CategoriaRepository_1 = require("../repository/CategoriaRepository");
class LivroService {
    constructor() {
        this.livroRepository = LivroRepository_1.LivroRepository.getInstance();
        this.categoriaRepository = CategoriaRepository_1.CategoriaRepository.getInstance();
    }
    cadastrarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, categoryId } = livroData;
            if (!title || !author || !categoryId) {
                throw new Error("Informações incompletas");
            }
            const categorias = yield this.categoriaRepository.getCategoriaByIdOuName(undefined, categoryId);
            if (categorias.length == 0) {
                throw new Error("Categoria não encontrada");
            }
            return this.livroRepository.insertLivro(new Livro_1.Livro(undefined, title, author, categoryId));
        });
    }
    atualizarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const livro = new Livro_1.Livro(livroData.id, livroData.title, livroData.author, livroData.categoryId);
            if (!(livro instanceof Livro_1.Livro)) {
                throw new Error("O parâmetro passado não é um objeto do tipo Livro");
            }
            this.livroRepository.updateLivro(livro);
            return livro;
        });
    }
    deletarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const livro = new Livro_1.Livro(livroData.id, livroData.title, livroData.author, livroData.categoryId);
            if (!(livro instanceof Livro_1.Livro)) {
                throw new Error("O parâmetro passado não é um objeto do tipo Livro");
            }
            const result = yield this.livroRepository.deleteLivro(livro);
            if (result.affectedRows == 0) {
                throw new Error("Livro não encontrado.");
            }
            return livro;
        });
    }
    getLivro(id, title, author, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            const result = yield this.livroRepository.getLivroPorIdOuTittleOuAuthorOuCategoria(title, author, categoryId, idNumber);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        });
    }
    getTodosLivro() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.livroRepository.filterAllLivro();
        });
    }
}
exports.LivroService = LivroService;
