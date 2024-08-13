import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

export class LivroRepository{

    private static instance: LivroRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): LivroRepository {
        if (!this.instance) {
            this.instance = new LivroRepository();
        }
        return this.instance
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

    async insertLivro(livro: Livro) :Promise<Livro>{
        const query = "INSERT INTO biblioteca.Livro (title, author, categoryId) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [livro.title, livro.author, livro.categoryId]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            livro.id = resultado.insertId;
            return livro;

        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async updateLivro(livro: Livro) :Promise<void>{
        const query = "UPDATE biblioteca.Livro set title = ?, author = ?, categoryId = ? where id = ?;" ;

        executarComandoSQL(query, [livro.title, livro.author, livro.categoryId, livro.id])
            .then(function (resultado) {
                return resultado
            }).catch(function (erro) {
                return erro
            });
    }

    async deleteLivro(livro: Livro) :Promise<any>{
        try {
            const query = "DELETE FROM biblioteca.Livro where id = ?;" ;
            const resposta = await executarComandoSQL(query, [livro.id, livro.title, livro.author, livro.categoryId]);
            console.log('Livro deletado com sucesso:', resposta);

            return resposta;
        
        } catch (err:any) {
            console.error('Erro ao deletar livro:', err);
            throw err;
        }
    }

    async getLivroPorIdOuTittleOuAuthorOuCategoria(id?: number, title?: string, author?: string, categoryId?:number): Promise<Livro[]> {
        let query = "SELECT * FROM biblioteca.Livro WHERE";
        const params: any[] = [];

        if (id) {
            query += " id = ?";
            params.push(id);
        }

        if (title) {
            query += (params.length ? " AND" : "") + " title = ?";
            params.push(title);
        }

        if (author) {
            query += (params.length ? " AND" : "") + " author = ?";
            params.push(author);
        }

        if (categoryId) {
            query += (params.length ? " AND" : "") + " categoryId = ?";
            params.push(categoryId);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Livro[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);

            return result;

        } catch (err) {
            console.error('Erro ao buscar livro:', err);
            throw err;
        }
    }

    async filterAllLivro() :Promise<Livro[]>{
        try {
            const query = "SELECT * FROM biblioteca.Livro";
            const result: Livro[] = await executarComandoSQL(query, []);

            return result;

        } catch (err) {
            console.error('Erro ao listar os livros:', err);
            throw err;
        }
    }
    
}