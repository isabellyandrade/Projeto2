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
exports.cadastrarEmprestimo = cadastrarEmprestimo;
exports.atualizarEmprestimo = atualizarEmprestimo;
exports.deletarEmprestimo = deletarEmprestimo;
exports.getEmprestimo = getEmprestimo;
exports.getEmprestimos = getEmprestimos;
const EmprestimoService_1 = require("../service/EmprestimoService");
const emprestimoService = new EmprestimoService_1.EmprestimoService();
function cadastrarEmprestimo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoEmprestimo = yield emprestimoService.cadastrarEmprestimo(req.body);
            res.status(201).json({
                mensagem: "Emprestimo adicionado com sucesso!",
                emprestimo: novoEmprestimo
            });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    });
}
;
function atualizarEmprestimo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const emprestimo = yield emprestimoService.atualizarEmprestimo(req.body);
            res.status(200).json({
                mensagem: "Emprestimo atualizado com sucesso!",
                emprestimo: emprestimo
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarEmprestimo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const emprestimo = yield emprestimoService.deletarEmprestimo(req.body);
            res.status(200).json({
                mensagem: "Emprestimo deletado com sucesso!",
                emprestimo: emprestimo
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function getEmprestimo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const emprestimo = yield emprestimoService.getEmprestimo(req.query.id, req.query.livroId, req.query.usuarioId, req.query.dataEmprestimo, req.query.dataDevolucao);
            res.status(200).json({
                mensagem: "Emprestimo encontrado com sucesso!",
                emprestimo: emprestimo
            });
        }
        catch (error) {
            res.status(404).json({ message: error.message });
        }
    });
}
;
function getEmprestimos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const emprestimos = yield emprestimoService.getTodosEmprestimo();
            res.status(200).json({
                mensagem: "Emprestimos listados com sucesso!",
                emprestimos: emprestimos
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
