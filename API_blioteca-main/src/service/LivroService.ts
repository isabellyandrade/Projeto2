import { Livro } from "../model/Livro";
import { Categoria } from "../model/Categoria";
import { LivroRepository } from "../repository/LivroRepository";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class LivroService{

    livroRepository = LivroRepository.getInstance();
    categoriaRepository = CategoriaRepository.getInstance();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const {title, author, categoryId} = livroData;
        if(!title || !author || !categoryId){
            throw new Error("Informações incompletas");
        }
        const categorias: Categoria[] = await this.categoriaRepository.getCategoriaByIdOuName(undefined, categoryId); 
        if(categorias.length == 0){
            throw new Error("Categoria não encontrada");
        }
        return this.livroRepository.insertLivro(new Livro(undefined, title, author, categoryId));
    }

    async atualizarLivro(livroData: any): Promise<Livro> {
        const livro = new Livro(livroData.id, livroData.title, livroData.author, livroData.categoryId);
        if (!(livro instanceof Livro)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Livro");
        }
        this.livroRepository.updateLivro(livro);
        return livro;
    }

    async deletarLivro(livroData: any): Promise<Livro> {
        const livro = new Livro(livroData.id, livroData.title, livroData.author, livroData.categoryId);
        if (!(livro instanceof Livro)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Livro");
        }
        const result:any = await this.livroRepository.deleteLivro(livro);
        if (result.affectedRows == 0) {
            throw new Error("Livro não encontrado.");
        }
        return livro;
    }

    async getLivro(id:any, title:any, author:any, categoryId: any):Promise<Livro|null>{
        const idNumber: number = parseInt(id,10);

        const result:Livro[] = await this.livroRepository.getLivroPorIdOuTittleOuAuthorOuCategoria(title, author, categoryId, idNumber);
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getTodosLivro():Promise<Livro[]>{
        return this.livroRepository.filterAllLivro();
    }
}