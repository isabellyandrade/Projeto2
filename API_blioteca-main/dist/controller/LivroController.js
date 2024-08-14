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
exports.cadastrarLivro = cadastrarLivro;
exports.atualizarLivro = atualizarLivro;
exports.deletarLivro = deletarLivro;
exports.getLivro = getLivro;
exports.getLivros = getLivros;
const LivroService_1 = require("../service/LivroService");
const livroService = new LivroService_1.LivroService();
function cadastrarLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = yield livroService.cadastrarLivro(req.body);
            res.status(201).json({
                mensagem: "Livro adicionado com sucesso!",
                livro: novoLivro
            });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    });
}
;
function atualizarLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const livro = yield livroService.atualizarLivro(req.body);
            res.status(200).json({
                mensagem: "Livro atualizado com sucesso!",
                livro: livro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const livro = yield livroService.deletarLivro(req.body);
            res.status(200).json({
                mensagem: "Livro deletado com sucesso!",
                livro: livro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function getLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const livro = yield livroService.getLivro(req.query.id, req.query.title, req.query.author, req.query.categoryId);
            res.status(200).json({
                livro: livro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function getLivros(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const livro = yield livroService.getTodosLivro();
            res.status(200).json({
                livros: livro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
