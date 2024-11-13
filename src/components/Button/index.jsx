import { Container } from "./style";

export function Button({title, loading = false, ...rest }) { //define a propriedade utilizada dentro do button() (pode ser 1.button(props) ou 2.button({title}) ) e dentro do return chamar como 1.{props.title} ou direto 2.{title}
  return(
    <Container 
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  );
}