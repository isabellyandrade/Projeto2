import { CategoriaService } from "../service/CategoriaService";
import{Route, Tags, Post, Body, Res, Put, Get, Query, Delete, Controller, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { CategoriaRequestDto } from "../model/dto/CategoriaResquestDto";
import { CategoriaDto } from "../model/dto/CategoriaDto";

@Route("categoria")
@Tags("Categoria")
export class CategoriaController extends Controller{
    categoriaService = new CategoriaService();

    @Post()
    async cadastrarCategoria(
        @Body() dto: CategoriaRequestDto,
        @Res() fail: TsoaResponse<409, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void>{
        try {
            const novaCategoria = await this.categoriaService.cadastrarCategoria(dto);
            return success(201, new BasicResponseDto("Categoria criada com sucesso!", novaCategoria));
    }catch (error: any) {
        return fail(409, new BasicResponseDto(error.message, undefined));
    }

};

    @Put()
    async atualizarCategoria(
        @Body() dto: CategoriaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void>{
        try {
            const categoria = await this.categoriaService.atualizarCategoria(dto);
            return success(200, new BasicResponseDto("Categoria atualizada com sucesso!", categoria));
    }catch (error: any) {
        return notFound(400, new BasicResponseDto(error.message, undefined));
    }

};

    @Delete()
    async deletarCategoria(
        @Body() dto: CategoriaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void>{
        try {
            const categoria = await this.categoriaService.deletarCategoria(dto);
            return success(200, new BasicResponseDto("Categoria deletada com sucesso!", categoria));
    }catch (error: any) {
        return notFound(400, new BasicResponseDto(error.message, undefined));
    }

};

@Get()
async getCategoria(
    @Query() id: number,
    @Query() name: string,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const categoria = await this.categoriaService.getCategoria(id, name);     
        return success(200, new BasicResponseDto("Categoria encontrada!", categoria));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Categoria não encontrada...", undefined));
    }
};

@Get("todos")
async getCategorias(
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const categorias = await this.categoriaService.getCategorias();     
        return success(200, new BasicResponseDto("Categorias encontradas!", categorias));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Categorias não encontradas...", undefined));
    }
};
/*
export async function getCategoria(req: Request, res: Response) {
    try {
        const categoria = await categoriaService.getCategoria(req.query.id, req.query.name);
        res.status(200).json(
            {
                categoria: categoria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
*/
};
