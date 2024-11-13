import { Link } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./style";

export function NewNote() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>New note</h1>
            <Link to="/">Return</Link>
          </header>

          <Input placeholder="Title" />
          <TextArea placeholder="Annotation" />

          <Section title="Links">
            <NoteItem value="https://google.com" />
            <NoteItem isNew placeholder="New Link" />
          </Section>

          <Section title="Markers">
            <div className="tags">
              <NoteItem value="Rect" />
              <NoteItem isNew placeholder="New Tag" />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  )
}