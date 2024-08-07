export class Usuario{
    id: number;
    name: string;
    email: string;
    senha: string;

    constructor(id?:number, name?:string, email?:string, senha?:string){
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
        this.senha = senha || '';
    }
}