import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { UsecarrinhoContext } from "Common/carrinho";

function Produto({ nome, foto, id, valor, unidade }) {
  const {carrinho, adicionarProduto, removerProduto } = UsecarrinhoContext();

   const produtoSelecionado = carrinho.find((produto) => produto.id === id);

  

  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary"
         onClick={()=> removerProduto(id)}
         disabled={!produtoSelecionado}
         
         >
          <RemoveIcon />
        </IconButton>
        {produtoSelecionado?.quantidade || 0}
        <IconButton color="primary" onClick={() => adicionarProduto({ nome, valor, id })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
