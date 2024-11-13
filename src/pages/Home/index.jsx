import { FiPlus } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Note } from '../../components/Note';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="All" isActive/></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node" /></li>
        
      </Menu>

      <Search>
        <Input placeholder="Search by title"/>
      </Search>

      <Content>
        <Section title="My notes">
          <Note data={{
              title: 'React', 
              tags:[
                {id: '1', name: 'react'},
                {id: '2', name: 'node'}
              ]
            }}
          />
        </Section>
      </Content>

      <NewNote to="/newnote">
        <FiPlus />
        New Note
      </NewNote>

    </Container>
  )
};