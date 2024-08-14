import { Request, Response } from "express";
import { LivroService } from "../service/LivroService";

const livroService = new LivroService();

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
};