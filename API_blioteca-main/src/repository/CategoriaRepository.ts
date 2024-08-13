import { executarComandoSQL } from "../database/mysql";
import { Categoria } from "../model/Categoria";

export class CategoriaRepository{

    private static instance: CategoriaRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): CategoriaRepository {
        if (!this.instance) {
            this.instance = new CategoriaRepository();
        }
        return this.instance
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

    async insertCategory(categoria: Categoria) :Promise<Categoria>{
        try {
            const resultado = await executarComandoSQL("INSERT INTO biblioteca.Categoria (name) VALUES (?)",
                [categoria.name]
            );
            categoria.id = resultado.insertId;
            console.log('Categoria criada com sucesso:', categoria);
            return categoria;

        } catch (err) {
            console.error('Erro ao criar uma categoria: ', err);
        throw err;
        }
    }

    async updateCategory(categoria: Categoria) :Promise<void>{
        try {
            const query = "UPDATE biblioteca.Categoria set name = ? where id = ?;" ;
            await executarComandoSQL(query, [categoria.name, categoria.id]);
            console.log('Categoria atualizada com sucesso:', categoria.id);
        } catch (err) {
            console.error('Erro ao atualizar categoria:', err);
            throw err;
        }
    }

    async deleteCategory(categoriaId: number) :Promise<void>{
        try {
            const query = "DELETE FROM biblioteca.Categoria where id = ?;" ;
            await executarComandoSQL(query, [categoriaId]);
            console.log('Categoria deletada com sucesso, ID: ', categoriaId);
        
        } catch (err) {
            console.error(`Falha ao deletar a categoria`, err);
            throw err;
        }
    }

    async getCategoriaByIdOuName(name?: string, id?: number): Promise<Categoria[]> {
        let query = "SELECT * FROM biblioteca.Categoria WHERE";
        const params: any[] = [];

        if (name) {
            query += " name = ?";
            params.push(name);
        }

        if (id) {
            query += (params.length ? " AND" : "") + " id = ?";
            params.push(id);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Categoria[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);
            return result;
        } catch (err) {
            console.error('Erro ao buscar pessoa:', err);
            throw err;
        }
    }

    async filterAllCategory() :Promise<Categoria[]>{
        try {
            const query = "SELECT * FROM biblioteca.Categoria" ;
            const resultado: Categoria[] = await executarComandoSQL(query, []);
                
            return resultado;

        } catch (err:any) {
            console.error(`Falha ao listar as categorias`, err);
            throw err;
        }
    }
}