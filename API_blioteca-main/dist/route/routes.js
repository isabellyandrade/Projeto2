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
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const UsuarioController_1 = require("./../controller/UsuarioController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const PessoaContoller_1 = require("./../controller/PessoaContoller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const LivroController_1 = require("./../controller/LivroController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const EmprestimoController_1 = require("./../controller/EmprestimoController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const CategoriaController_1 = require("./../controller/CategoriaController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "UsuarioRequestDto": {
        "dataType": "refObject",
        "properties": {
            "pessoaId": { "dataType": "double", "required": true },
            "senha": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": { "dataType": "string", "required": true },
            "object": { "dataType": "any", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UsuarioDto": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "pessoaId": { "dataType": "double", "required": true },
            "senha": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PessoaRequestDto": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PessoaDto": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LivroResquestDto": {
        "dataType": "refObject",
        "properties": {
            "title": { "dataType": "string", "required": true },
            "author": { "dataType": "string", "required": true },
            "categoryId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LivroDto": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "title": { "dataType": "string", "required": true },
            "author": { "dataType": "string", "required": true },
            "categoryId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EmprestimoRequestDto": {
        "dataType": "refObject",
        "properties": {
            "livroId": { "dataType": "double", "required": true },
            "usuarioId": { "dataType": "double", "required": true },
            "dataEmprestimo": { "dataType": "string", "required": true },
            "dataDevolucao": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EmprestimoDto": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "livroId": { "dataType": "double", "required": true },
            "usuarioId": { "dataType": "double", "required": true },
            "dataEmprestimo": { "dataType": "string", "required": true },
            "dataDevolucao": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CategoriaRequestDto": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CategoriaDto": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/usuario', ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController)), ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController.prototype.cadastrarUsuario)), function UsuarioController_cadastrarUsuario(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "UsuarioRequestDto" },
                fail: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UsuarioController_1.UsuarioController();
                yield templateService.apiHandler({
                    methodName: 'cadastrarUsuario',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/usuario', ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController)), ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController.prototype.atualizarUsuario)), function UsuarioController_atualizarUsuario(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "UsuarioDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UsuarioController_1.UsuarioController();
                yield templateService.apiHandler({
                    methodName: 'atualizarUsuario',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/usuario', ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController)), ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController.prototype.deletarCategoria)), function UsuarioController_deletarCategoria(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "UsuarioDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UsuarioController_1.UsuarioController();
                yield templateService.apiHandler({
                    methodName: 'deletarCategoria',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/usuario', ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController)), ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController.prototype.getUsuario)), function UsuarioController_getUsuario(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                pessoaId: { "in": "query", "name": "pessoaId", "required": true, "dataType": "double" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UsuarioController_1.UsuarioController();
                yield templateService.apiHandler({
                    methodName: 'getUsuario',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/usuario/todos', ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController)), ...((0, runtime_1.fetchMiddlewares)(UsuarioController_1.UsuarioController.prototype.getUsuarios)), function UsuarioController_getUsuarios(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UsuarioController_1.UsuarioController();
                yield templateService.apiHandler({
                    methodName: 'getUsuarios',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/pessoa', ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController.prototype.cadastrarPessoa)), function PessoaController_cadastrarPessoa(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "PessoaRequestDto" },
                fail: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaContoller_1.PessoaController();
                yield templateService.apiHandler({
                    methodName: 'cadastrarPessoa',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/pessoa', ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController.prototype.atualizarPessoa)), function PessoaController_atualizarPessoa(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "PessoaDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaContoller_1.PessoaController();
                yield templateService.apiHandler({
                    methodName: 'atualizarPessoa',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/pessoa', ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController.prototype.deletarPessoa)), function PessoaController_deletarPessoa(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "PessoaDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaContoller_1.PessoaController();
                yield templateService.apiHandler({
                    methodName: 'deletarPessoa',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/pessoa', ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController.prototype.getPessoa)), function PessoaController_getPessoa(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                name: { "in": "query", "name": "name", "required": true, "dataType": "string" },
                email: { "in": "query", "name": "email", "required": true, "dataType": "string" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaContoller_1.PessoaController();
                yield templateService.apiHandler({
                    methodName: 'getPessoa',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/pessoa/todos', ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaContoller_1.PessoaController.prototype.getPessoas)), function PessoaController_getPessoas(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaContoller_1.PessoaController();
                yield templateService.apiHandler({
                    methodName: 'getPessoas',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/livro', ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController)), ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController.prototype.cadastrarLivro)), function LivroController_cadastrarLivro(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "LivroResquestDto" },
                fail: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new LivroController_1.LivroController();
                yield templateService.apiHandler({
                    methodName: 'cadastrarLivro',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/livro', ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController)), ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController.prototype.atualizarLivro)), function LivroController_atualizarLivro(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "LivroDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new LivroController_1.LivroController();
                yield templateService.apiHandler({
                    methodName: 'atualizarLivro',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/livro', ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController)), ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController.prototype.deletarLivro)), function LivroController_deletarLivro(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "LivroDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new LivroController_1.LivroController();
                yield templateService.apiHandler({
                    methodName: 'deletarLivro',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/livro', ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController)), ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController.prototype.getLivro)), function LivroController_getLivro(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                title: { "in": "query", "name": "title", "required": true, "dataType": "string" },
                author: { "in": "query", "name": "author", "required": true, "dataType": "string" },
                categoryId: { "in": "query", "name": "categoryId", "required": true, "dataType": "string" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new LivroController_1.LivroController();
                yield templateService.apiHandler({
                    methodName: 'getLivro',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/livro/todos', ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController)), ...((0, runtime_1.fetchMiddlewares)(LivroController_1.LivroController.prototype.getLivros)), function LivroController_getLivros(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new LivroController_1.LivroController();
                yield templateService.apiHandler({
                    methodName: 'getLivros',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/emprestimo', ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController)), ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController.prototype.cadastrarEmprestimo)), function EmprestimoController_cadastrarEmprestimo(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "EmprestimoRequestDto" },
                fail: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new EmprestimoController_1.EmprestimoController();
                yield templateService.apiHandler({
                    methodName: 'cadastrarEmprestimo',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/emprestimo', ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController)), ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController.prototype.atualizarEmprestimo)), function EmprestimoController_atualizarEmprestimo(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "EmprestimoDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new EmprestimoController_1.EmprestimoController();
                yield templateService.apiHandler({
                    methodName: 'atualizarEmprestimo',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/emprestimo', ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController)), ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController.prototype.deletarEmprestimo)), function EmprestimoController_deletarEmprestimo(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "EmprestimoDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new EmprestimoController_1.EmprestimoController();
                yield templateService.apiHandler({
                    methodName: 'deletarEmprestimo',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/emprestimo', ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController)), ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController.prototype.getEmprestimo)), function EmprestimoController_getEmprestimo(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                livroId: { "in": "query", "name": "livroId", "required": true, "dataType": "double" },
                usuarioId: { "in": "query", "name": "usuarioId", "required": true, "dataType": "double" },
                dataEmprestimo: { "in": "query", "name": "dataEmprestimo", "required": true, "dataType": "string" },
                dataDevolucao: { "in": "query", "name": "dataDevolucao", "required": true, "dataType": "string" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new EmprestimoController_1.EmprestimoController();
                yield templateService.apiHandler({
                    methodName: 'getEmprestimo',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/emprestimo/todos', ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController)), ...((0, runtime_1.fetchMiddlewares)(EmprestimoController_1.EmprestimoController.prototype.getEmprestimos)), function EmprestimoController_getEmprestimos(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new EmprestimoController_1.EmprestimoController();
                yield templateService.apiHandler({
                    methodName: 'getEmprestimos',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/categoria', ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController)), ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController.prototype.cadastrarCategoria)), function CategoriaController_cadastrarCategoria(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "CategoriaRequestDto" },
                fail: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CategoriaController_1.CategoriaController();
                yield templateService.apiHandler({
                    methodName: 'cadastrarCategoria',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/categoria', ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController)), ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController.prototype.atualizarCategoria)), function CategoriaController_atualizarCategoria(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "CategoriaDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CategoriaController_1.CategoriaController();
                yield templateService.apiHandler({
                    methodName: 'atualizarCategoria',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/categoria', ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController)), ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController.prototype.deletarCategoria)), function CategoriaController_deletarCategoria(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "CategoriaDto" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CategoriaController_1.CategoriaController();
                yield templateService.apiHandler({
                    methodName: 'deletarCategoria',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/categoria', ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController)), ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController.prototype.getCategoria)), function CategoriaController_getCategoria(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                name: { "in": "query", "name": "name", "required": true, "dataType": "string" },
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CategoriaController_1.CategoriaController();
                yield templateService.apiHandler({
                    methodName: 'getCategoria',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/categoria/todos', ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController)), ...((0, runtime_1.fetchMiddlewares)(CategoriaController_1.CategoriaController.prototype.getCategorias)), function CategoriaController_getCategorias(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                notFound: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CategoriaController_1.CategoriaController();
                yield templateService.apiHandler({
                    methodName: 'getCategorias',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
