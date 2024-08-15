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
exports.cadastrarCategoria = cadastrarCategoria;
exports.atualizarCategoria = atualizarCategoria;
exports.deletarCategoria = deletarCategoria;
exports.getCategoria = getCategoria;
exports.getCategorias = getCategorias;
const CategoriaService_1 = require("../service/CategoriaService");
const categoriaService = new CategoriaService_1.CategoriaService();
function cadastrarCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novaCategoria = yield categoriaService.cadastrarCategoria(req.body);
            res.status(201).json({
                mensagem: "Categoria adicionada com sucesso!",
                categoria: novaCategoria
            });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    });
}
;
function atualizarCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoria = yield categoriaService.atualizarCategoria(req.body);
            res.status(200).json({
                mensagem: "Categoria atualizada com sucesso!",
                categoria: categoria
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoria = yield categoriaService.deletarCategoria(req.body);
            res.status(200).json({
                mensagem: "Categoria deletada com sucesso!",
                categoria: categoria
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function getCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoria = yield categoriaService.getCategoria(req.query.id, req.query.name);
            res.status(200).json({
                categoria: categoria
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function getCategorias(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoria = yield categoriaService.getCategorias();
            res.status(200).json({
                categorias: categoria
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
