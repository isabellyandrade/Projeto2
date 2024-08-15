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
exports.cadastrarPessoa = cadastrarPessoa;
exports.atualizarPessoa = atualizarPessoa;
exports.deletarPessoa = deletarPessoa;
exports.getPessoa = getPessoa;
exports.getPessoas = getPessoas;
const PessoaService_1 = require("../service/PessoaService");
const pessoaService = new PessoaService_1.PessoaService();
function cadastrarPessoa(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novaPessoa = yield pessoaService.cadastrarPessoa(req.body);
            res.status(201).json({
                mensagem: "Pessoa adicionada com sucesso!",
                pessoa: novaPessoa
            });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    });
}
;
function atualizarPessoa(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pessoa = yield pessoaService.atualizarPessoa(req.body);
            res.status(200).json({
                mensagem: "Pessoa atualizada com sucesso!",
                pessoa: pessoa
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarPessoa(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pessoa = yield pessoaService.deletarPessoa(req.body);
            res.status(200).json({
                mensagem: "Pessoa deletada com sucesso!",
                pessoa: pessoa
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function getPessoa(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pessoa = yield pessoaService.getPessoa(req.query.id, req.query.name, req.query.email);
            res.status(200).json({
                pessoa: pessoa
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function getPessoas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pessoa = yield pessoaService.getPessoas();
            res.status(200).json({
                pessoas: pessoa
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
