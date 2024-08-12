import { Emprestimo } from "../model/Emprestimo";
import { Usuario } from "../model/Usuario";
import { Livro } from "../model/Livro";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { LivroRepository } from "../repository/LivroRepository";

export class EmprestimoService{

    empresimoRepository = EmprestimoRepository.getInstance();
    usuarioRepository = UsuarioRepository.getInstance();        
    livroRepository = LivroRepository.getInstance();

    async cadastrarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const {livroId, usuarioId, dataEmprestimo, dataDevolucao} = emprestimoData;
        if(!livroId || !usuarioId || !dataEmprestimo || !dataDevolucao){
            throw new Error("Informações incompletas");
        }
        const usuarios: Usuario[] = await this.usuarioRepository.getUsuarioPorIdOuPessoa(usuarioId, undefined); 
        if(usuarios.length == 0){
            throw new Error("Usuario não cadastrado");
        }
        
        const livros: Livro[] = await this.livroRepository.getLivroPorIdOuTittleOuAuthorOuCategoria(livroId, undefined, undefined, undefined); 
        if(livros.length == 0){
            throw new Error("Livro não encontrado");
        }

        return this.empresimoRepository.insertEmprestimo(new Emprestimo(undefined, livroId, usuarioId, dataEmprestimo, dataDevolucao));
    }

    async atualizarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const emprestimo = new Emprestimo(emprestimoData.id, emprestimoData.livroId, emprestimoData.usuarioId, emprestimoData.dataEmprestimo, emprestimoData.dataDevolucao);
        if (!(emprestimo instanceof Emprestimo)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Emprestimo");
        }
        this.empresimoRepository.updateEmprestimo(emprestimo);
        return emprestimo;
    }

    async deletarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const emprestimo = new Emprestimo(emprestimoData.id, emprestimoData.livroId, emprestimoData.usuarioId, emprestimoData.dataEmprestimo, emprestimoData.dataDevolucao);
        if (!(emprestimo instanceof Emprestimo)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Emprestimo");
        }

        const result:any = await this.empresimoRepository.deleteEmprestimo(emprestimo);
        if (result.affectedRows == 0) {
            throw new Error("Emprestimo não encontrado.");
        }
        return emprestimo;
    }

    async getEmprestimo(id:any, livroId:any, usuarioId:any, dataEmprestimo: any, dataDevolucao: any):Promise<Emprestimo|null>{
        const idNumber: number = parseInt(id,10);

        const result:Emprestimo[] = await this.empresimoRepository.getEmprestimoPorIdOuUsuarioOuDataEmpOuDataDev( idNumber, usuarioId, dataEmprestimo, dataDevolucao,);
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getTodosEmprestimo():Promise<Emprestimo[]>{
        return this.empresimoRepository.filterAllEmprestimos();
    }
}