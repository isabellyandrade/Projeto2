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
exports.CategoriaController = void 0;
const LivroService_1 = require("../service/LivroService");
const tsoa_1 = require("tsoa");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const LivroRequestDto_1 = require("../model/dto/LivroRequestDto");
let CategoriaController = class CategoriaController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.livroService = new LivroService_1.LivroService();
        /*
        export async function cadastrarLivro (req: Request, res: Response){
            try {
                const novoLivro = await livroService.cadastrarLivro(req.body);
                res.status(201).json(
                    {
                        mensagem:"Livro adicionado com sucesso!",
                        livro:novoLivro
                    }
                );
            } catch (error: any) {
                res.status(409).json({ message: error.message});
            }
        };
        
        export async function atualizarLivro (req: Request, res: Response){
            try {
                const livro = await livroService.atualizarLivro(req.body);
                res.status(200).json(
                    {
                        mensagem:"Livro atualizado com sucesso!",
                        livro:livro
                    }
                );
            } catch (error: any) {
                res.status(400).json({ message: error.message});
            }
        };
        
        export async function deletarLivro (req: Request, res: Response){
            try {
                const livro = await livroService.deletarLivro(req.body);
                res.status(200).json(
                    {
                        mensagem:"Livro deletado com sucesso!",
                        livro:livro
                    }
                );
            } catch (error: any) {
                res.status(400).json({ message: error.message});
            }
        };
        
        export async function getLivro(req: Request, res: Response) {
            try {
                const livro = await livroService.getLivro(req.query.id, req.query.title, req.query.author, req.query.categoryId);
                res.status(200).json(
                    {
                        livro: livro
                    }
                );
            } catch (error: any) {
                res.status(400).json({ message: error.message });
            }
        }
        
        export async function getLivros(req: Request, res: Response) {
            try {
                const livro = await livroService.getTodosLivro();
                res.status(200).json(
                    {
                        livros: livro
                    }
                );
            } catch (error: any) {
                res.status(400).json({ message: error.message });
            }
        */
    }
    cadastrarLivro(dto, fail, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoLivro = yield this.livroService.cadastrarLivro(dto);
                return success(201, new BasicResponseDto_1.BasicResponseDto("Livro adicionado com sucesso!", novoLivro));
            }
            catch (error) {
                return fail(409, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
};
exports.CategoriaController = CategoriaController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LivroRequestDto_1.LivroResquestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "cadastrarLivro", null);
exports.CategoriaController = CategoriaController = __decorate([
    (0, tsoa_1.Route)("livro"),
    (0, tsoa_1.Tags)("Livro")
], CategoriaController);
;
