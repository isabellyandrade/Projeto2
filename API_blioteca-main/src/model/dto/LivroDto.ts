export class LivroDto{
    id: number;
    title: string;
    author: string;
    categoryId: number;

    constructor(id:number, title:string, author:string, categoryId:number){
        this.id = id;
        this.title = title;
        this.author = author;
        this.categoryId = categoryId;
    }
}