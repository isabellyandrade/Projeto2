import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

export class LivroRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            categoryId INT NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertLivro(title: string, author:string, categoryId: number) :Promise<Livro>{
        const query = "INSERT INTO biblioteca.Livro (title, author, categoryId) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, categoryId]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const livro = new Livro(resultado.insertId,title, author, categoryId);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async updateLivro(id: number, title: string, author:string, categoryId: number) :Promise<Livro>{
        const query = "UPDATE biblioteca.Livro set title = ?, author = ?, categoryId = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, categoryId, id]);
            console.log('Livro atualizado com sucesso, ID: ', resultado);
            const livro = new Livro(id, title, author, categoryId);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteLivro(id: number, title: string, author:string, categoryId: number) :Promise<Livro>{
        const query = "DELETE FROM biblioteca.Livro where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro deletado com sucesso, ID: ', resultado);
            const livro = new Livro(id, title, author, categoryId);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterLivroById(id: number) :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.Livro where id = ?" ;

        try {
            const resultado: Livro[] = await executarComandoSQL(query, [id]);
            console.log('Livro localizado com sucesso, ID: ', resultado);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllLivro() :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.Livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    
}