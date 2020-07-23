import React from "react";
import { GiAtom } from "react-icons/gi/";

import { Container, Content, QRLogo } from "./style.js";

export default function Header() {
  return (
    <Container>
      <Content>
        <QRLogo>
          <span>QR</span>
          <strong>Code</strong>
          <span>Generator</span>
        </QRLogo>

        <button type="button">
          <GiAtom size={32} title="Hey! Visit the repo in the console" />
        </button>
      </Content>
    </Container>
  );
}
