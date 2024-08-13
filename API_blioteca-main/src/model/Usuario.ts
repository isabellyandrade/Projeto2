export class Usuario{
    id: number;
    pessoaId: number;
    senha: string;

    constructor(id?:number, pessoaId?:number, senha?:string){
        this.id = id || 0;
        this.pessoaId = pessoaId || 0;
        this.senha = senha || '';
    }
}