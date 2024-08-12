import { Pessoa } from "../model/Pessoa";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService{

    private pessoaRepository =  PessoaRepository.getInstance();

    async cadastrarPessoa(pessoaData: any): Promise<Pessoa> {
        const {name, email} = pessoaData;
        if(!name || !email){
            throw new Error("Informações incompletas");
        }
        let pessoa = new Pessoa(undefined, name, email)
        const PessoasEncontradas: Pessoa[]= await this.pessoaRepository.getPessoaByNameEmailId(undefined, pessoa.email)

        if(PessoasEncontradas.length > 0){
            throw new Error("Já existe uma pessoa cadastrado com esse email");
        }

        return this.pessoaRepository.insertPessoa(pessoa);
    }

    async atualizarPessoa(pessoaData: any): Promise<Pessoa> {
        const { id, name, email} = pessoaData;
        if(!id || !name || !email){
            throw new Error("Informações incompletas");
        }

        const pessoa = new Pessoa(id, name, email);
        const PessoasEncontradas: Pessoa[]= await this.pessoaRepository.getPessoaByNameEmailId(undefined, undefined, id)

        if(PessoasEncontradas.length == 0){
            throw new Error("Pessoa informada inexistente.");
        }

        this.pessoaRepository.updatePessoa(pessoa);
        return pessoa;
    }

    async deletarPessoa(pessoaData: any): Promise<Pessoa> {
        const { id, name, email} = pessoaData;
        if(!id || !name || !email){
            throw new Error("Informações incompletas");
        }
        if (typeof id !== 'number' ) {
            throw new Error("Informe um ID correto.");
        }

        const pessoa = new Pessoa(id, name, email);
        const PessoasEncontradas: Pessoa[]= await this.pessoaRepository.getPessoaByNameEmailId(pessoa.name, pessoa.email, pessoa.id)

        if(PessoasEncontradas.length == 0){
            throw new Error("Pessoa informada inexistente.");
        }

        const result:any = await this.pessoaRepository.deletePessoa(pessoa.id);
        return pessoa;
    }

    async getPessoa(id:any, name:any, email:any):Promise<Pessoa|null>{
        const idNumber = parseInt(id, 10);
        const result:Pessoa[] = await this.pessoaRepository.getPessoaByNameEmailId(name,email,idNumber);
        
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getPessoas():Promise<Pessoa[]>{
        return this.pessoaRepository.filterAllPessoas();
    }
}