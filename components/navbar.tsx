import React from "react";
import Container from "./container";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav>
      <Container>
        <span>
          <Logo />
        </span>
      </Container>
    </nav>
  );
}
