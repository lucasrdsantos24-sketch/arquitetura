export class ItemPedido{
constructor(produto,qtd){
this.produto=produto;
this.qtd=qtd;
}

subtotal(){
return this.produto.preco*this.qtd;
}
}
