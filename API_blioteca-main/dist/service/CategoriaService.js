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
exports.CategoriaService = void 0;
const Categoria_1 = require("../model/Categoria");
const CategoriaRepository_1 = require("../repository/CategoriaRepository");
class CategoriaService {
    constructor() {
        this.categoriaRepository = CategoriaRepository_1.CategoriaRepository.getInstance();
    }
    cadastrarCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = categoriaData;
            if (!name) {
                throw new Error("Informações incompletas");
            }
            let categoria = new Categoria_1.Categoria(undefined, name);
            const categoriasEncontradas = yield this.categoriaRepository.getCategoriaByIdOuName(categoria.name, undefined);
            if (categoriasEncontradas.length > 0) {
                throw new Error("Já existe uma categoria cadastrado com esse nome");
            }
            return this.categoriaRepository.insertCategory(categoria);
        });
    }
    atualizarCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = categoriaData;
            if (!id || !name) {
                throw new Error("Informações incompletas");
            }
            const categoria = new Categoria_1.Categoria(id, name);
            const categoriasEncontradas = yield this.categoriaRepository.getCategoriaByIdOuName(undefined, id);
            if (categoriasEncontradas.length == 0) {
                throw new Error("Categoria informada inexistente.");
            }
            this.categoriaRepository.updateCategory(categoria);
            return categoria;
        });
    }
    deletarCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = categoriaData;
            if (!id || !name) {
                throw new Error("Informações incompletas");
            }
            if (typeof id !== 'number') {
                throw new Error("Informe um ID correto.");
            }
            const categoria = new Categoria_1.Categoria(id, name);
            const categoriasEncontradas = yield this.categoriaRepository.getCategoriaByIdOuName(categoria.name, categoria.id);
            if (categoriasEncontradas.length == 0) {
                throw new Error("Categoria informada inexistente.");
            }
            const result = yield this.categoriaRepository.deleteCategory(categoria.id);
            return categoria;
        });
    }
    getCategoria(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            const result = yield this.categoriaRepository.getCategoriaByIdOuName(name, idNumber);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        });
    }
    getCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.categoriaRepository.filterAllCategory();
        });
    }
}
exports.CategoriaService = CategoriaService;
