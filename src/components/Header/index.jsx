import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from "./style";

export function Header() {
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

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}