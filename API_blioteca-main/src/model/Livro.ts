export class Livro{
    id: number;
    title: string;
    author: string;
    categoryId: number;

    constructor(id?:number, title?:string, author?:string, categoryId?:number){
        this.id = id || 0;
        this.title = title || '';
        this.author = author || '';
        this.categoryId = categoryId || 0;
    }
}