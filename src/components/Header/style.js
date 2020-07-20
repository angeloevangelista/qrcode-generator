import styled from 'styled-components';

import { dark } from '../../styles/colors';

const colorSchema = dark;

export const Container = styled.header`
  height: 64px;
  background: ${colorSchema.primary};
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: ${colorSchema.fontPrimary};
  font-size: 22px;

  a {
  color: ${colorSchema.fontPrimary};
}

  @keyframes rotation {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: rotation 10s linear infinite;
  }
`;

export const QRLogo = styled.div`
  span:first-child {
    color: ${colorSchema.fontSecondary};
    font-weight: 100;
  }

  strong {
    font-weight: bold;
  }

  span:last-child {
    color: ${colorSchema.fontSecondary};
    font-size: 14px;
  }
`;
