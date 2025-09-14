import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProduto } from '../card-produto/card-produto';
import { Produto } from '../../../model/produto';
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule, CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrls: ['./lista-produtos.css']
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);
  private produtos = toSignal<Produto[], Produto[]>(this.produtoService.listar(), { initialValue: [] });

  apenasPromo = signal(false);

  filtrarCategoria = signal(null as string | null);

  prodExibidos = computed(() => {
    let lista = this.produtos();

    if (this.apenasPromo()) {
      lista = lista.filter(p => p.promo);
    }

    if (this.filtrarCategoria()) {
      lista = lista.filter(p => p.categoria === this.filtrarCategoria());
    }

    return lista;
  });

  alternarPromo() {
    this.apenasPromo.update(p => !p);
  }

  alterarFiltrarCategoria(categoria: string | null) {
    if (categoria === 'null' || categoria === '') {
      this.filtrarCategoria.set(null);
    } else {
      this.filtrarCategoria.set(categoria);
    }
  }

  onViewProduct(id: number) {
    alert('Página de detalhe ainda não implementada.');
  }

  onAddToCart(produto: { id: number; quantidade: number }) {
    alert(`Carrinho ainda não implementado. Quantidade: ${produto.quantidade}`);
  }

  categorias = computed(() => {
    const todasCategorias = this.produtos().map(p => p.categoria);
    return Array.from(new Set(todasCategorias));
  });

}