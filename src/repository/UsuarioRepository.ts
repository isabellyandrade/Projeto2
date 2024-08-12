import { executarComandoSQL } from "../database/mysql";
import { Usuario } from "../model/Usuario";

export class UsuarioRepository{

    private static instance: UsuarioRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): UsuarioRepository {
        if (!this.instance) {
            this.instance = new UsuarioRepository();
        }
        return this.instance
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Pessoa (
            id INT AUTO_INCREMENT PRIMARY KEY,
            pessoaId INT NOT NULL,
            senha VARCHAR(255) NOT NULL
        )`;
        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertUsuario(usuario: Usuario) :Promise<Usuario>{
        const query = "INSERT INTO biblioteca.Usuario (pessoaId, senha) VALUES (?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [usuario.pessoaId, usuario.senha]);
            console.log('Usuario criado com sucesso:', resultado.insertId);
            usuario.id = resultado.insertId;
            return usuario;

        } catch (err) {
            console.error('Erro ao criar novo usuario:', err);
            throw err;
        }
    }

    async updateUsuario(usuario: Usuario):Promise<void>{
        const query = "UPDATE biblioteca.Usuario set pessoaId = ?, senha = ? where id = ?;" ;

        executarComandoSQL(query, [usuario.pessoaId, usuario.senha, usuario.id])
            .then(function (resultado) {
                return resultado
            }).catch(function (erro) {
                return erro
            });
    }

    async deleteUsuario(usuario: Usuario) :Promise<any>{
        try {
        const query = "DELETE FROM biblioteca.Usuario where id = ?;" ;
        const resposta = await executarComandoSQL(query, [usuario.id, usuario.pessoaId, usuario.senha]);
        console.log('Usuario deletado com sucesso:', resposta);
        
        return resposta;
        
        } catch (err:any) {
            console.error('Erro ao deletar usuario:', err);
            throw err;
        }
    }

    async getUsuarioPorIdOuPessoa(id?: number, pessoaId?: number): Promise<Usuario[]> {
        let query = "SELECT * FROM biblioteca.Usuario WHERE";
        const params: any[] = [];

        if (id) {
            query += " id = ?";
            params.push(id);
        }

        if (pessoaId) {
            query += (params.length ? " AND" : "") + " pessoaId = ?";
            params.push(pessoaId);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Usuario[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);

            return result;

        } catch (err) {
            console.error('Erro ao buscar conta:', err);
            throw err;
        }
    }

    async listaUsuario(): Promise<Usuario[]> {
        try {
            const query = "SELECT * FROM biblioteca.Usuario";
            const result: Usuario[] = await executarComandoSQL(query, []);

            return result;

        } catch (err) {
            console.error('Erro ao listar os usuarios:', err);
            throw err;
        }
    }
    
}