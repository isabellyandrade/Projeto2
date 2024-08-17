import express from 'express';
import { RegisterRoutes } from './route/routes';
import { setupSwagger } from './config/swagger';

const app = express();

const PORT = 3400;

app.use(express.json());

const apiRouter = express.Router();
RegisterRoutes(apiRouter);

app.use('/api', apiRouter);

RegisterRoutes(app);

setupSwagger(app);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));
/*
import { cadastrarLivro, atualizarLivro , deletarLivro, getLivro, getLivros } from './controller/LivroController';
import { cadastrarCategoria, atualizarCategoria , deletarCategoria, getCategoria, getCategorias } from './controller/CategoriaController';
import { cadastrarEmprestimo, atualizarEmprestimo , deletarEmprestimo, getEmprestimo, getEmprestimos } from './controller/EmprestimoController';
import { cadastrarUsuario, atualizarUsuario , deletarUsuario, getUsuario, getUsuarios } from './controller/UsuarioController';
import { cadastrarPessoa, atualizarPessoa , deletarPessoa, getPessoa, getPessoas } from './controller/PessoaContoller';

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

app.post("/api/usuario", cadastrarUsuario)
app.put("/api/usuario", atualizarUsuario)
app.delete("/api/usuario", deletarUsuario)
app.get("/api/usuario", getUsuario)
app.get("/api/usuario/todos", getUsuarios)

app.post("/api/pessoa", cadastrarPessoa)
app.put("/api/pessoa", atualizarPessoa)
app.delete("/api/pessoa", deletarPessoa)
app.get("/api/pessoa", getPessoa)
app.get("/api/pessoa/todos", getPessoas)
*/
