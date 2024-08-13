import { executarComandoSQL } from "../database/mysql";
import { Emprestimo } from "../model/Emprestimo";

export class EmprestimoRepository{

    private static instance: EmprestimoRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): EmprestimoRepository {
        if (!this.instance) {
            this.instance = new EmprestimoRepository();
        }
        return this.instance
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Emprestimo (
            id INT AUTO_INCREMENT PRIMARY KEY,
            livroId INT NOT NULL,
            usuarioId INT NOT NULL,
            dataEmp DATE NOT NULL,
            dataDev DATE NOT NULL
        )`;
        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertEmprestimo(emprestimo: Emprestimo) :Promise<Emprestimo>{
        const query = "INSERT INTO biblioteca.Emprestimo (livroId, usuarioId, dataEmp, dataDev) VALUES (?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
            console.log('Emprestimo realizado com sucesso, ID: ', resultado.insertId);
            emprestimo.id = resultado.insertId;
            return emprestimo;

        } catch (err) {
            console.error('Erro ao concluir o emprestimo:', err);
            throw err;
        }
    }

    async updateEmprestimo(emprestimo: Emprestimo) :Promise<void>{
        const query = "UPDATE biblioteca.Emprestimo set livroId = ?, usuarioId = ?, dataEmp = ?, dataDev = ? where id = ?;" ;

        executarComandoSQL(query, [emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao, emprestimo.id])
            .then(function (resultado) {
                return resultado
            }).catch(function (erro) {
                return erro
            });
    }

    async deleteEmprestimo(emprestimo: Emprestimo) :Promise<void>{
        try {
        const query = "DELETE FROM biblioteca.Emprestimo where id = ?;" ;
        const resposta = await executarComandoSQL(query, [emprestimo.id, emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
        console.log('Emprestimo deletado com sucesso:', resposta);

        return resposta;
    
    } catch (err:any) {
        console.error('Erro ao deletar emprestimo:', err);
        throw err;
    }
    }

    async getEmprestimoPorIdOuUsuarioOuDataEmpOuDataDev(id?: number, usuarioId?: number, dataEmprestimo?: string, dataDevolucao?:string): Promise<Emprestimo[]> {
        let query = "SELECT * FROM biblioteca.Emprestimo WHERE";
        const params: any[] = [];

        if (id) {
            query += " id = ?";
            params.push(id);
        }

        if (usuarioId) {
            query += (params.length ? " AND" : "") + " usuarioId = ?";
            params.push(usuarioId);
        }

        if (dataEmprestimo) {
            query += (params.length ? " AND" : "") + " dataEmp = ?";
            params.push(dataEmprestimo);
        }

        if (dataDevolucao) {
            query += (params.length ? " AND" : "") + " dataDev = ?";
            params.push(dataDevolucao);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result:Emprestimo[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);

            return result;

        } catch (err) {
            console.error('Erro ao buscar emprestimo:', err);
            throw err;
        }
    }

    async filterAllEmprestimos() :Promise<Emprestimo[]>{
        try {
            const query = "SELECT * FROM biblioteca.Emprestimo";
            const result: Emprestimo[] = await executarComandoSQL(query, []);

            return result;

        } catch (err) {
            console.error('Erro ao listar os emprestimos:', err);
            throw err;
        }
    }    
}