import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-emerald-300/15 bg-black/55 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-emerald-50 terminal-glow"
        >
          sumit@folio:~$
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#about"
            className="terminal-link text-sm font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            className="terminal-link text-sm font-medium"
          >
            Skills
          </a>
          <a
            href="#work"
            className="terminal-link text-sm font-medium"
          >
            Work
          </a>
          <Button variant="ghost" href="#contact">
            Contact
          </Button>
        </nav>
        <Button className="md:hidden" variant="ghost" href="#contact">
          Contact
        </Button>
      </Container>
    </header>
  );
}

export default Header;
