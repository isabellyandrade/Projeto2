"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.EmprestimoController = void 0;
const EmprestimoService_1 = require("../service/EmprestimoService");
const tsoa_1 = require("tsoa");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const EmprestimoRequestDto_1 = require("../model/dto/EmprestimoRequestDto");
const EmprestimoDto_1 = require("../model/dto/EmprestimoDto");
let EmprestimoController = class EmprestimoController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.emprestimoService = new EmprestimoService_1.EmprestimoService();
        /*
        export async function getEmprestimo (req: Request, res: Response){
            try {
                const emprestimo = await emprestimoService.getEmprestimo(req.query.id, req.query.livroId, req.query.usuarioId, req.query.dataEmprestimo, req.query.dataDevolucao);
                res.status(200).json(
                    {
                        mensagem:"Emprestimo encontrado com sucesso!",
                        emprestimo:emprestimo
                    }
                );
            } catch (error: any) {
                res.status(400).json({ message: error.message});
            }
        };
        
        export async function getEmprestimos (req: Request, res: Response){
            try {
                const emprestimos = await emprestimoService.getTodosEmprestimo();
                res.status(200).json(
                    {
                        mensagem:"Emprestimos listados com sucesso!",
                        emprestimos:emprestimos
                    }
                    );
            } catch (error: any) {
                res.status(400).json({ message: error.message});
            }
        */
    }
    cadastrarEmprestimo(dto, fail, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoEmprestimo = yield this.emprestimoService.cadastrarEmprestimo(dto);
                return success(201, new BasicResponseDto_1.BasicResponseDto("Empréstimo adicionado com sucesso!", novoEmprestimo));
            }
            catch (error) {
                return fail(409, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    atualizarEmprestimo(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emprestimo = yield this.emprestimoService.atualizarEmprestimo(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Empréstimo atualizado com sucesso!", emprestimo));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    deletarEmprestimo(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emprestimo = yield this.emprestimoService.deletarEmprestimo(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Empréstimo deletado com sucesso!", emprestimo));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    getEmprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emprestimo = yield this.emprestimoService.getEmprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Empréstimo encontrado com sucesso!", emprestimo));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    getEmprestimos(notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emprestimos = yield this.emprestimoService.getTodosEmprestimo();
                return success(200, new BasicResponseDto_1.BasicResponseDto("Empréstimos encontrados!", emprestimos));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
};
exports.EmprestimoController = EmprestimoController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmprestimoRequestDto_1.EmprestimoRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], EmprestimoController.prototype, "cadastrarEmprestimo", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmprestimoDto_1.EmprestimoDto, Function, Function]),
    __metadata("design:returntype", Promise)
], EmprestimoController.prototype, "atualizarEmprestimo", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmprestimoDto_1.EmprestimoDto, Function, Function]),
    __metadata("design:returntype", Promise)
], EmprestimoController.prototype, "deletarEmprestimo", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __param(3, (0, tsoa_1.Query)()),
    __param(4, (0, tsoa_1.Query)()),
    __param(5, (0, tsoa_1.Res)()),
    __param(6, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, String, Function, Function]),
    __metadata("design:returntype", Promise)
], EmprestimoController.prototype, "getEmprestimo", null);
__decorate([
    (0, tsoa_1.Get)("todos"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], EmprestimoController.prototype, "getEmprestimos", null);
exports.EmprestimoController = EmprestimoController = __decorate([
    (0, tsoa_1.Route)("emprestimo"),
    (0, tsoa_1.Tags)("Emprestimo")
], EmprestimoController);
;
