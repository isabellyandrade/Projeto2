import { EmprestimoService } from "../service/EmprestimoService";
import{Route, Tags, Post, Body, Res, Put, Get, Query, Delete, Controller, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { EmprestimoRequestDto } from "../model/dto/EmprestimoRequestDto";
import { EmprestimoDto } from "../model/dto/EmprestimoDto";

@Route("emprestimo")
@Tags("Emprestimo")
export class EmprestimoController extends Controller{
    emprestimoService = new EmprestimoService();

    @Post()
    async cadastrarEmprestimo(
        @Body() dto: EmprestimoRequestDto,
        @Res() fail: TsoaResponse<409, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void>{
        try {
            const novoEmprestimo = await this.emprestimoService.cadastrarEmprestimo(dto);
            return success(201, new BasicResponseDto("Empréstimo adicionado com sucesso!", novoEmprestimo));
    }catch (error: any) {
        return fail(409, new BasicResponseDto(error.message, undefined));
    }

};

@Put()
async atualizarEmprestimo(
    @Body() dto: EmprestimoDto,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void>{
    try {
        const emprestimo = await this.emprestimoService.atualizarEmprestimo(dto);
        return success(200, new BasicResponseDto("Empréstimo atualizado com sucesso!", emprestimo));
}catch (error: any) {
    return notFound(400, new BasicResponseDto(error.message, undefined));
}

};

@Delete()
async deletarEmprestimo(
    @Body() dto: EmprestimoDto,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void>{
    try {
        const emprestimo = await this.emprestimoService.deletarEmprestimo(dto);
        return success(200, new BasicResponseDto("Empréstimo deletado com sucesso!", emprestimo));
}catch (error: any) {
    return notFound(400, new BasicResponseDto(error.message, undefined));
}

};

@Get()
async getEmprestimo(
    @Query() id: number,
    @Query() livroId: number,
    @Query() usuarioId: number,
    @Query() dataEmprestimo: string,
    @Query() dataDevolucao: string,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const emprestimo = await this.emprestimoService.getEmprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);     
        return success(200, new BasicResponseDto("Empréstimo encontrado com sucesso!", emprestimo));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto(error.message, undefined));
    }
};

@Get("todos")
async getEmprestimos(
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const emprestimos = await this.emprestimoService.getTodosEmprestimo();     
        return success(200, new BasicResponseDto("Empréstimos encontrados!", emprestimos));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto(error.message, undefined));
    }
};
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
};