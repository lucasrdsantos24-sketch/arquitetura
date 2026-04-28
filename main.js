import { adicionarHamburguer,getPedido } from "../controllers/PedidoController.js";

const pedido=getPedido();

window.adicionar=()=>{
adicionarHamburguer();
}

window.enviar=()=>{
const msg=`Total do pedido: R$ ${pedido.total()}`;
window.open(`https://wa.me/5588999999999?text=${encodeURIComponent(msg)}`);
}

pedido.inscrever(()=>{
document.getElementById("total").innerText=pedido.total();
});
