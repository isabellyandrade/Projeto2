"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroResquestDto = void 0;
class LivroResquestDto {
    constructor(title, author, categoryId) {
        this.title = title || '';
        this.author = author || '';
        this.categoryId = categoryId || 0;
    }
}
exports.LivroResquestDto = LivroResquestDto;
