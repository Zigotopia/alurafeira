import CarrinhoProvider from "Common/carrinho";
import UserProvider from "Common/usuario";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CarrinhoProvider>
            <Route path="/feira">
              <Feira />
            </Route>
          </CarrinhoProvider>
        </UserProvider>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
