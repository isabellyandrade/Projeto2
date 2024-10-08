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
exports.PessoaController = void 0;
const PessoaService_1 = require("../service/PessoaService");
const tsoa_1 = require("tsoa");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const PessoaRequestDto_1 = require("../model/dto/PessoaRequestDto");
const PessoaDto_1 = require("../model/dto/PessoaDto");
let PessoaController = class PessoaController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.pessoaService = new PessoaService_1.PessoaService();
    }
    cadastrarPessoa(dto, fail, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novaPessoa = yield this.pessoaService.cadastrarPessoa(dto);
                return success(201, new BasicResponseDto_1.BasicResponseDto("Pessoa adicionada com sucesso!", novaPessoa));
            }
            catch (error) {
                return fail(409, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    atualizarPessoa(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoa = yield this.pessoaService.atualizarPessoa(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pessoa atualizada com sucesso!", pessoa));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    deletarPessoa(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoria = yield this.pessoaService.deletarPessoa(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pessoa deletada com sucesso!", categoria));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    getPessoa(id, name, email, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoa = yield this.pessoaService.getPessoa(id, name, email);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pessoa encontrada!", pessoa));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto("Pessoa não encontrada...", undefined));
            }
        });
    }
    ;
    getPessoas(notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoas = yield this.pessoaService.getPessoas();
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pessoas encontradas!", pessoas));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto("Pessoas não encontradas...", undefined));
            }
        });
    }
    ;
};
exports.PessoaController = PessoaController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PessoaRequestDto_1.PessoaRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "cadastrarPessoa", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PessoaDto_1.PessoaDto, Function, Function]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "atualizarPessoa", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PessoaDto_1.PessoaDto, Function, Function]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "deletarPessoa", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __param(3, (0, tsoa_1.Res)()),
    __param(4, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Function, Function]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "getPessoa", null);
__decorate([
    (0, tsoa_1.Get)("todos"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "getPessoas", null);
exports.PessoaController = PessoaController = __decorate([
    (0, tsoa_1.Route)("pessoa"),
    (0, tsoa_1.Tags)("Pessoa")
], PessoaController);
;
