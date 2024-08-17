import { PessoaService } from "../service/PessoaService";
import{Route, Tags, Post, Body, Res, Put, Get, Query, Delete, Controller, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { PessoaRequestDto } from "../model/dto/PessoaRequestDto";
import { PessoaDto } from "../model/dto/PessoaDto";

@Route("pessoa")
@Tags("Pessoa")
export class PessoaController extends Controller{
    pessoaService = new PessoaService();

    @Post()
    async cadastrarPessoa(
        @Body() dto: PessoaRequestDto,
        @Res() fail: TsoaResponse<409, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void>{
        try {
            const novaPessoa = await this.pessoaService.cadastrarPessoa(dto);
            return success(201, new BasicResponseDto("Pessoa adicionada com sucesso!", novaPessoa));
    }catch (error: any) {
        return fail(409, new BasicResponseDto(error.message, undefined));
    }

};

    @Put()
    async atualizarPessoa(
        @Body() dto: PessoaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void>{
        try {
            const pessoa = await this.pessoaService.atualizarPessoa(dto);
            return success(200, new BasicResponseDto("Pessoa atualizada com sucesso!", pessoa));
    }catch (error: any) {
        return notFound(400, new BasicResponseDto(error.message, undefined));
    }

};

    @Delete()
    async deletarPessoa(
        @Body() dto: PessoaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void>{
        try {
            const categoria = await this.pessoaService.deletarPessoa(dto);
            return success(200, new BasicResponseDto("Pessoa deletada com sucesso!", categoria));
    }catch (error: any) {
        return notFound(400, new BasicResponseDto(error.message, undefined));
    }

};

@Get()
async getPessoa(
    @Query() id: number,
    @Query() name: string,
    @Query() email: string,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const pessoa = await this.pessoaService.getPessoa(id, name, email);     
        return success(200, new BasicResponseDto("Pessoa encontrada!", pessoa));
    }catch (error: any) {
        return notFound(400, new BasicResponseDto("Pessoa não encontrada...", undefined));
    }
};

@Get("todos")
async getPessoas(
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const pessoas = await this.pessoaService.getPessoas();     
        return success(200, new BasicResponseDto("Pessoas encontradas!", pessoas));
    }catch (error: any) {
        return notFound(400, new BasicResponseDto("Pessoas não encontradas...", undefined));
    }
};     
};