export class Pedido{
constructor(){
this.itens=[];
this.observers=[];
}

adicionar(item){
this.itens.push(item);
this.notificar();
}

total(){
return this.itens.reduce((s,i)=>s+i.subtotal(),0);
}

inscrever(fn){
this.observers.push(fn);
}

notificar(){
this.observers.forEach(fn=>fn());
}
}
