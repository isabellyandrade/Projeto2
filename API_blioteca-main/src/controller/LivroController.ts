import { LivroService } from "../service/LivroService";
import{Route, Tags, Post, Body, Res, Put, Get, Query, Delete, Controller, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { LivroResquestDto } from "../model/dto/LivroRequestDto";
import { LivroDto } from "../model/dto/LivroDto";

@Route("livro")
@Tags("Livro")
export class LivroController extends Controller{
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

    @Put()
    async atualizarLivro(
        @Body() dto: LivroDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void>{
        try {
            const livro = await this.livroService.atualizarLivro(dto);
            return success(200, new BasicResponseDto("Livro atualizado com sucesso!", livro));
    }catch (error: any) {
        return notFound(400, new BasicResponseDto(error.message, undefined));
    }

};

    @Delete()
    async deletarLivro(
        @Body() dto: LivroDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void>{
        try {
            const livro = await this.livroService.deletarLivro(dto);
            return success(200, new BasicResponseDto("Categoria deletada com sucesso!", livro));
    }catch (error: any) {
        return notFound(400, new BasicResponseDto(error.message, undefined));
    }

};

@Get()
async getLivro(
    @Query() id: number,
    @Query() title: string,
    @Query() author: string,
    @Query() categoryId: string,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const livro = await this.livroService.getLivro(id, title, author, categoryId);     
        return success(200, new BasicResponseDto("Livro encontrado!", livro));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Livro não encontrado...", undefined));
    }
};

@Get("todos")
async getLivros(
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const livros = await this.livroService.getTodosLivro();     
        return success(200, new BasicResponseDto("Livros encontrados!", livros));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Livros não encontrados...", undefined));
    }
};

/*
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
*/
};