import { Button, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { userContext } from 'Common/usuario';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, InputContainer, Titulo
} from './styles';




function Login() {
  const history = useHistory();
  const {nome, setNome, saldo, setSaldo} = useContext(userContext);
  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        type="number"
        value={saldo}
        onChange={(evento) => setSaldo(evento.target.value)}
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/feira")}
        disabled ={nome.length < 3} // se o nome for menor que 4 caracteres, o botão fica desabilitado
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;



 
