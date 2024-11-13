import { Container, Links, Content } from './style'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return(
    <Container>
      <Header />

      <main>
        <Content>

      <ButtonText title="Excluir Nota"/>

      <h1>
        React
      </h1>

      <p>
        React is a JavaScript library developed by Facebook used to create user interfaces UI. 
        It allows the building of interactive and dynamic web applications using reusable components 
        and the concept of state to manage changes in the interface without reloading the page. 
        React uses the Virtual DOM, which makes updates faster, optimizing the application's performance.
      </p>

      <Section title="Links">
        <Links>
          <li>
            <a href="#">https://github.com/MatheusBusarello</a>
          </li>

          <li>
            <a href="#">https://github.com/MatheusBusarello/bloco-notas</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
         <Tag title="express" /> 
         <Tag title="Node" /> 
      </Section>
      
      <Button title="Back"/>

      </Content>
      </main>
    </Container>
  )
}