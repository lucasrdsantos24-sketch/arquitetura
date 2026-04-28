import { Produto } from "../models/Produto.js";
import { ItemPedido } from "../models/ItemPedido.js";
import { Pedido } from "../models/Pedido.js";

const pedido=new Pedido();

export function getPedido(){
return pedido;
}

export function adicionarHamburguer(){
const produto=new Produto(1,"Hamburguer",15);
pedido.adicionar(new ItemPedido(produto,1));
}
