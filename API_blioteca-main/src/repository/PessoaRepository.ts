import e from "express";
import { executarComandoSQL } from "../database/mysql";
import { Pessoa } from "../model/Pessoa";

export class PessoaRepository{

    private static instance: PessoaRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): PessoaRepository {
        if (!this.instance) {
            this.instance = new PessoaRepository();
        }
        return this.instance
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Pessoa (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )`;
        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertPessoa(pessoa: Pessoa) :Promise<Pessoa>{
        try {
            const resultado = await executarComandoSQL("INSERT INTO biblioteca.Pessoa (name, email) VALUES (?,?)",
                [pessoa.name, pessoa.email]
            );
            pessoa.id = resultado.insertId;
            console.log('Pessoa criada com sucesso:', pessoa);
            return pessoa;

        } catch (err) {
            console.error('Erro ao criar uma pessoa: ', err);
        throw err;
        }
    }

    async updatePessoa(pessoa: Pessoa) :Promise<void>{
        try {
        const query = "UPDATE biblioteca.Pessoa set name = ?, email = ? where id = ?;" ;
        
        await executarComandoSQL(query, [pessoa.name, pessoa.email, pessoa.id]);
            console.log('Pessoa atualizada com sucesso:', pessoa.id);
        } catch (err) {
            console.error('Erro ao atualizar pessoa:', err);
            throw err;
        }
    }

    async deletePessoa(pessoaId: number) :Promise<void>{
        try {
            const query = "DELETE FROM biblioteca.Pessoa where id = ?;" ;
            await executarComandoSQL(query, [pessoaId]);
            console.log('Pessoa deletada com sucesso, ID: ', pessoaId);
        
        } catch (err) {
            console.error(`Falha ao deletar a pessoa`, err);
            throw err;
        }
    }

    async getPessoaByNameEmailId(name?: string, email?: string, id?: number): Promise<Pessoa[]> {
        let query = "SELECT * FROM biblioteca.Pessoa WHERE";
        const params: any[] = [];

        if (name) {
            query += " name = ?";
            params.push(name);
        }

        if (email) {
            query += (params.length ? " AND" : "") + " email = ?";
            params.push(email);
        }

        if (id) {
            query += (params.length ? " AND" : "") + " id = ?";
            params.push(id);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Pessoa[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);
            return result;
        } catch (err) {
            console.error('Erro ao buscar pessoa:', err);
            throw err;
        }
    }

    async filterAllPessoas() :Promise<Pessoa[]>{
        try {
            const query = "SELECT * FROM biblioteca.Pessoa" ;
            const resultado: Pessoa[] = await executarComandoSQL(query, []);
            
            return resultado;

        } catch (err:any) {
            console.error(`Falha ao listar as pessoas`, err);
            throw err;
        }
    }
}