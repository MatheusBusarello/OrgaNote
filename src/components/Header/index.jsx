import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./style";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/MatheusBusarello.png"
          alt="User picture"
        />

        <div>
          <span>Welcome</span>
          <strong>Matheus Busarello</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}