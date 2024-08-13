import { Usuario } from "../model/Usuario";
import { Pessoa } from "../model/Pessoa";
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { PessoaRepository } from "../repository/PessoaRepository";

export class UsuarioService{

    usuarioRepository = UsuarioRepository.getInstance();
    pessoaRepository = PessoaRepository.getInstance();

    async cadastrarUsuario(userData: any): Promise<Usuario> {
        const {pessoaId, senha} = userData;
        if(!pessoaId || !senha){
            throw new Error("Informações incompletas");
        }
        const pessoas: Pessoa[] = await this.pessoaRepository.getPessoaByNameEmailId(undefined, undefined, pessoaId); 
        if(pessoas.length == 0){
            throw new Error("Pessoa não encontrada");
        }
        return this.usuarioRepository.insertUsuario(new Usuario(undefined, pessoaId, senha));
    }

    async atualizarUsuario(userData: Usuario): Promise<Usuario> {
        const usuario = new Usuario(userData.id, userData.pessoaId, userData.senha);
        if (!(usuario instanceof Usuario)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Usuario");
        }

        this.usuarioRepository.updateUsuario(usuario);
        return usuario;
    }

    async deletarUsuario(userData: Usuario): Promise<Usuario> {
        const usuario = new Usuario(userData.id, userData.pessoaId, userData.senha);
        if (!(usuario instanceof Usuario)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Usuario");
        }
        const result:any = await this.usuarioRepository.deleteUsuario(usuario);
        if (result.affectedRows == 0) {
            throw new Error("Usuario não encontrado.");
        }
        return usuario;
    }

    async getUsuario(id: any, pessoaId: any): Promise<Usuario|null> {
        const idNumber: number = parseInt(id,10);
        const pessoaNumber: number = parseInt(pessoaId,10);

        const result:Usuario[] = await this.usuarioRepository.getUsuarioPorIdOuPessoa(idNumber,pessoaNumber);
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getTodosUsuario():Promise<Usuario[]>{
        return this.usuarioRepository.listaUsuario();
    }
}