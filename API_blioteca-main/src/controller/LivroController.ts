import { LivroService } from "../service/LivroService";
import{Route, Tags, Post, Body, Res, Put, Get, Query, Delete, Controller, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { LivroResquestDto } from "../model/dto/LivroRequestDto";
import { LivroDto } from "../model/dto/LivroDto";

@Route("livro")
@Tags("Livro")
export class CategoriaController extends Controller{
    livroService = new LivroService();

    @Post()
    async cadastrarLivro(
        @Body() dto: LivroResquestDto,
        @Res() fail: TsoaResponse<409, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void>{
        try {
            const novoLivro = await this.livroService.cadastrarLivro(dto);
            return success(201, new BasicResponseDto("Livro adicionado com sucesso!", novoLivro));
    }catch (error: any) {
        return fail(409, new BasicResponseDto(error.message, undefined));
    }

};

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
};