import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from "./style";

export function SignIn() {
  const data = useAuth();

  console.log("My context", data)

  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Application to save and manage your links.</p>
        <h2>Sign in</h2>

        <Input 
          placeholder="Email"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Open" />

        <Link to="/register" >
          Create an account
        </Link>
      </Form>

      <Background />
    </Container>
  );
}