"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LivroController_1 = require("./controller/LivroController");
const CategoriaController_1 = require("./controller/CategoriaController");
const EmprestimoController_1 = require("./controller/EmprestimoController");
const UsuarioController_1 = require("./controller/UsuarioController");
const app = (0, express_1.default)();
const PORT = 3400;
app.use(express_1.default.json());
app.post("/api/livro", LivroController_1.cadastrarLivro);
app.put("/api/livro", LivroController_1.atualizarLivro);
app.delete("/api/livro", LivroController_1.deletarLivro);
app.get("/api/livro", LivroController_1.getLivro);
app.get("/api/livro/todos", LivroController_1.getLivros);
app.post("/api/categoria", CategoriaController_1.cadastrarCategoria);
app.put("/api/categoria", CategoriaController_1.atualizarCategoria);
app.delete("/api/categoria", CategoriaController_1.deletarCategoria);
app.get("/api/categoria", CategoriaController_1.getCategoria);
app.get("/api/categoria/todos", CategoriaController_1.getCategorias);
app.post("/api/emprestimo", EmprestimoController_1.cadastrarEmprestimo);
app.put("/api/emprestimo", EmprestimoController_1.atualizarEmprestimo);
app.delete("/api/emprestimo", EmprestimoController_1.deletarEmprestimo);
app.get("/api/emprestimo", EmprestimoController_1.getEmprestimo);
app.get("/api/emprestimo/todos", EmprestimoController_1.getEmprestimos);
app.post("/api/usuario", UsuarioController_1.cadastrarUsuario);
app.put("/api/usuario", UsuarioController_1.atualizarUsuario);
app.delete("/api/usuario", UsuarioController_1.deletarUsuario);
app.get("/api/usuario", UsuarioController_1.getUsuario);
app.get("/api/usuario/todos", UsuarioController_1.getUsuario);
app.listen(PORT, () => console.log("API online na porta: " + PORT));
