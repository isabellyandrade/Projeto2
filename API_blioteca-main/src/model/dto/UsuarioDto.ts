export class UsuarioDto{
    id: number;
    pessoaId: number;
    senha: string;

    constructor(id:number, pessoaId:number, senha:string){
        this.id = id;
        this.pessoaId = pessoaId;
        this.senha = senha;
    }
}