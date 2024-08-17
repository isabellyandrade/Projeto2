export class UsuarioRequestDto{
    pessoaId: number;
    senha: string;

    constructor(pessoaId?:number, senha?:string){
        this.pessoaId = pessoaId || 0;
        this.senha = senha || '';
    }
}