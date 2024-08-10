import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const {title, author, categoryId} = livroData;
        if(!title || !author || !categoryId){
            throw new Error("Informações incompletas");
        }
        const novoLivro =  await this.livroRepository.insertLivro(title, author, categoryId);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async atualizarLivro(livroData: any): Promise<Livro> {
        const { id, title, author, categoryId} = livroData;
        if(!id || !title || !author || !categoryId){
            throw new Error("Informações incompletas");
        }

        const livro =  await this.livroRepository.updateLivro(id,title, author, categoryId);
        console.log("Service - Update ", livro);
        return livro;
    }

    async deletarLivro(livroData: any): Promise<Livro> {
        const { id, title, author, categoryId} = livroData;
        if(!id || !title || !author || !categoryId){
            throw new Error("Informações incompletas");
        }

        const livro =  await this.livroRepository.deleteLivro(id,title, author, categoryId);
        console.log("Service - Delete ", livro);
        return livro;
    }

    async filtrarLivroPorId(livroData: any): Promise<Livro[]> {
        if(!livroData ){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(livroData, 10);

        const livros:Livro[] =  await this.livroRepository.filterLivroById(id);

        if(livros.length == 0){
            throw new Error("Livro não encontrado!")
        }
        console.log("Service - Filtrar", livros);
        return livros;
    }

    async listarTodosLivros(): Promise<Livro[]> {
        const livro =  await this.livroRepository.filterAllLivro();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

}