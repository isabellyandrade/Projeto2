import { Categoria } from "../model/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{

    private categoriaRepository =  CategoriaRepository.getInstance();

    async cadastrarCategoria(categoriaData: any): Promise<Categoria> {
        const {name} = categoriaData;
        if(!name){
            throw new Error("Informações incompletas");
        }
        let categoria = new Categoria(undefined, name)
        const categoriasEncontradas: Categoria[]= await this.categoriaRepository.getCategoriaByIdOuName(categoria.name, undefined)

        if(categoriasEncontradas.length > 0){
            throw new Error("Já existe uma categoria cadastrado com esse nome");
        }

        return this.categoriaRepository.insertCategory(categoria);
    }

    async atualizarCategoria(categoriaData: any): Promise<Categoria> {
        const { id, name} = categoriaData;
        if(!id || !name){
            throw new Error("Informações incompletas");
        }
        const categoria = new Categoria(id, name);
        const categoriasEncontradas: Categoria[]= await this.categoriaRepository.getCategoriaByIdOuName(undefined, id)

        if(categoriasEncontradas.length == 0){
            throw new Error("Categoria informada inexistente.");
        }

        this.categoriaRepository.updateCategory(categoria);
        return categoria;
    }

    async deletarCategoria(categoriaData: any): Promise<Categoria> {
        const { id, name} = categoriaData;
        if(!id || !name){
            throw new Error("Informações incompletas");
        }
        if (typeof id !== 'number' ) {
            throw new Error("Informe um ID correto.");
        }

        const categoria = new Categoria(id, name);
        const categoriasEncontradas: Categoria[]= await this.categoriaRepository.getCategoriaByIdOuName(categoria.name, categoria.id)

        if(categoriasEncontradas.length == 0){
            throw new Error("Categoria informada inexistente.");
        }

        const result:any = await this.categoriaRepository.deleteCategory(categoria.id);
        return categoria;
    }

    async getCategoria(id:any, name:any):Promise<Categoria|null>{
        const idNumber = parseInt(id, 10);
        const result:Categoria[] = await this.categoriaRepository.getCategoriaByIdOuName(name, idNumber);
        
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getCategorias():Promise<Categoria[]>{
        return this.categoriaRepository.filterAllCategory();
    }
}