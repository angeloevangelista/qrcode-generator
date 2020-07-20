import React, { useState } from 'react';
import { RiEmotionHappyLine } from 'react-icons/ri';
import QRCode from 'qrcode.react';
import saveSvgAsPng from 'save-svg-as-png';

import {
  Container,
  Content,
  Information,
  Input,
  QRContainer,
  DownloadButton,
} from './style';

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: 'white',
};

export default function Home() {
  const [text, setText] = useState('');

  function handleDownloadClick() {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById('qrcode-result'),
      'qrcode.png',
      imageOptions
    );
  }

  return (
    <Container dark>
      <Content>
        <div>
          <Information>
            <strong>Welcome to QR Code Generator!</strong>

            <p>
              To use this tool you just need to type your text and your QR Code
              will be generated automatically.
            </p>

            <span>
              Yeah, it&apos;s simple! <RiEmotionHappyLine size={24} />
            </span>
          </Information>

          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message to the World..."
          />
        </div>

        <div>
          <QRContainer>
            <QRCode id="qrcode-result" renderAs="svg" size={150} value={text} />
          </QRContainer>

          <DownloadButton type="button" onClick={handleDownloadClick}>
            Download
          </DownloadButton>
        </div>
      </Content>
    </Container>
  );
}
