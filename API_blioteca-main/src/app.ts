import express from 'express';
import { cadastrarLivro, atualizarLivro , deletarLivro, getLivro, getLivros } from './controller/LivroController';
import { cadastrarCategoria, atualizarCategoria , deletarCategoria, getCategoria, getCategorias } from './controller/CategoriaController';
import { cadastrarEmprestimo, atualizarEmprestimo , deletarEmprestimo, getEmprestimo, getEmprestimos } from './controller/EmprestimoController';


const app = express();

const PORT = 3400;

app.use(express.json());

app.post("/api/livro", cadastrarLivro)
app.put("/api/livro", atualizarLivro)
app.delete("/api/livro", deletarLivro)
app.get("/api/livro", getLivro)
app.get("/api/livro/todos", getLivros)

app.post("/api/categoria", cadastrarCategoria)
app.put("/api/categoria", atualizarCategoria)
app.delete("/api/categoria", deletarCategoria)
app.get("/api/categoria", getCategoria)
app.get("/api/categoria/todos", getCategorias)


app.post("/api/emprestimo", cadastrarEmprestimo)
app.put("/api/emprestimo", atualizarEmprestimo)
app.delete("/api/emprestimo", deletarEmprestimo)
app.get("/api/emprestimo", getEmprestimo)
app.get("/api/emprestimo/todos", getEmprestimos)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));