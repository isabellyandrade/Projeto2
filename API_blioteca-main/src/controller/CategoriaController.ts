import { Request, Response } from "express";
import { CategoriaService } from "../service/CategoriaService";

const categoriaService = new CategoriaService();

export async function cadastrarCategoria (req: Request, res: Response){
    try {
        const novaCategoria = await categoriaService.cadastrarCategoria(req.body);
        res.status(201).json(
            {
                mensagem:"Categoria adicionada com sucesso!",
                categoria:novaCategoria
            }
        );
    } catch (error: any) {
        res.status(409).json({ message: error.message});
    }
};

export async function atualizarCategoria (req: Request, res: Response){
    try {
        const categoria = await categoriaService.atualizarCategoria(req.body);
        res.status(200).json(
            {
                mensagem:"Categoria atualizada com sucesso!",
                categoria:categoria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarCategoria (req: Request, res: Response){
    try {
        const categoria = await categoriaService.deletarCategoria(req.body);
        res.status(200).json(
            {
                mensagem:"Categoria deletada com sucesso!",
                categoria:categoria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

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

export async function getCategorias(req: Request, res: Response) {
    try {
        const categoria = await categoriaService.getCategorias();
        res.status(200).json(
            {
                categorias: categoria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};