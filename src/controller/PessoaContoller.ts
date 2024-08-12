import e, { Request, Response } from "express";
import { PessoaService } from "../service/PessoaService";

const pessoaService = new PessoaService();

export async function cadastrarPessoa(req: Request, res: Response){
    try {
        const novaPessoa = await pessoaService.cadastrarPessoa(req.body);
        res.status(201).json(
            {
                mensagem:"Pessoa adicionada com sucesso!",
                pessoa:novaPessoa
            }
        );
    } catch (error: any) {
        res.status(409).json({ message: error.message});
    }
};

export async function atualizarPessoa(req: Request, res: Response){
    try {
        const pessoa = await pessoaService.atualizarPessoa(req.body);
        res.status(200).json(
            {
                mensagem:"Pessoa atualizada com sucesso!",
                pessoa:pessoa
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarPessoa (req: Request, res: Response){
    try {
        const pessoa = await pessoaService.deletarPessoa(req.body);
        res.status(200).json(
            {
                mensagem:"Pessoa deletada com sucesso!",
                pessoa:pessoa
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function getPessoa(req: Request, res: Response) {
    try {
        const pessoa = await pessoaService.getPessoa(req.query.id, req.query.name, req.query.email);
        res.status(200).json(
            {
                pessoa: pessoa
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export async function getPessoas(res: Response) {
    try {
        const pessoa = await pessoaService.getPessoas();
        res.status(200).json(
            {
                pessoas: pessoa
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};