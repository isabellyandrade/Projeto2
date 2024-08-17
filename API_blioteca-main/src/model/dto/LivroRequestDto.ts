export class LivroResquestDto{
    title: string;
    author: string;
    categoryId: number;

    constructor(title?:string, author?:string, categoryId?:number){
        this.title = title || '';
        this.author = author || '';
        this.categoryId = categoryId || 0;
    }
}