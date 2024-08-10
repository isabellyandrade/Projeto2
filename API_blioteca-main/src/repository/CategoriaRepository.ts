import { executarComandoSQL } from "../database/mysql";
import { Categoria } from "../model/Categoria";

export class CategoriaRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Categoria (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
        )`;
        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertCategory(name: string) :Promise<Categoria>{
        const query = "INSERT INTO biblioteca.Categoria (name) VALUES (?)" ;

        try {
            const resultado = await executarComandoSQL(query, [name]);
            console.log('Categoria inserida com sucesso, ID: ', resultado.insertId);
            const categoria = new Categoria(resultado.insertId, name);
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err) {
            console.error('Erro ao inserir a categoria:', err);
            throw err;
        }
    }

    async updateCategory(id: number, name: string) :Promise<Categoria>{
        const query = "UPDATE biblioteca.Categoria set name = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [name, id]);
            console.log('Categoria atualizada com sucesso, ID: ', resultado);
            const categoria = new Categoria(id, name);
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar a categoria de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteCategory(id: number, name: string) :Promise<Categoria>{
        const query = "DELETE FROM biblioteca.Categoria where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Categoria deletada com sucesso, ID: ', resultado);
            const categoria = new Categoria(id, name);
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a categoria de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterCategoryById(id: number) :Promise<Categoria[]>{
        const query = "SELECT * FROM biblioteca.Categoria where id = ?" ;

        try {
            const resultado: Categoria[] = await executarComandoSQL(query, [id]);
            console.log('Categoria localizada com sucesso, ID: ', resultado);
            return new Promise<Categoria[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a categoria de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllCategory() :Promise<Categoria[]>{
        const query = "SELECT * FROM biblioteca.Categoria" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Categoria[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    
}