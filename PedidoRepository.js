export class PedidoRepository{
static instancia;

constructor(){
if(PedidoRepository.instancia){
return PedidoRepository.instancia;
}
PedidoRepository.instancia=this;
}
}
