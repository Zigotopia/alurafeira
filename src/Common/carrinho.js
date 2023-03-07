import { createContext, useContext, useState } from "react";
import React from "react";

export const carrinhoContext = createContext();
carrinhoContext.displayName = "carrinhoContext";

export default function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <carrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </carrinhoContext.Provider>
  );
}

export const UsecarrinhoContext = () => {
  const { carrinho, setCarrinho } = useContext(carrinhoContext);
  function adicionarProduto(novoProduto) {
    let temoProduto = carrinho.some(
      (itemdocarrinho) => itemdocarrinho.id === novoProduto.id
    );

    if (!temoProduto) {
      novoProduto.quantidade = 1;

      setCarrinho([...carrinho, novoProduto]);
    } else {
      setCarrinho(
        carrinho.map((itemdoCarrinho) => {
          if (itemdoCarrinho.id === novoProduto.id) {
            itemdoCarrinho.quantidade += 1;
          }

          return itemdoCarrinho;
        })
      );
    }
  }

  function removerProduto(id) {
    const temOProduto = carrinho.find(itemdocarrinho => itemdocarrinho.id === id);

    const oUltimo = temOProduto.quantidade === 1 ;
    console.log(oUltimo);

    if (oUltimo) {
      setCarrinho(carrinhoAnterior => carrinhoAnterior.filter((item) => item.id !== id));
    } else {
      setCarrinho(
        carrinho.map((itemdoCarrinho) => {
          if (itemdoCarrinho.id === id) {
            itemdoCarrinho.quantidade -= 1;
          }

          return itemdoCarrinho;
        })
      );
    }
  }

  return { carrinho, setCarrinho, adicionarProduto, removerProduto };
};

// * o que eu fiz aqui basicamente foi atribuir a responsabilidade da logica de adicionar produtos apenas o contexto de carrinho. O componente produtos só cuida de renderizar os produtos e o contexto de carrinho cuida de adicionar os produtos no carrinho através da logica.
