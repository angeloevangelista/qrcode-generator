import React from "react";
import { GiAtom } from "react-icons/gi/";

import { Container, Content, QRLogo } from "./style";

export default function Header() {
  return (
    <Container>
      <Content>
        <QRLogo>
          <span>QR</span>
          <strong>Code</strong>
          <span>Generator</span>
        </QRLogo>

        <a href="https://github.com/angeloevangelista/qrcode-generator">
          <GiAtom size={32} title="Hey! Este app foi construído com ReactJs" />
        </a>
      </Content>
    </Container>
  );
}
