import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
}`;

export const Container = styled.header`
  height: 64px;
  background: ${(props) => props.theme.primary};
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: ${(props) => props.theme.fontPrimary};
  font-size: 22px;

  button {
    cursor: pointer;
    background: none;
    border: 0;
    color: ${(props) => props.theme.fontPrimary};
  }

  svg {
    /* animation: ${rotation} 10s linear infinite; */
  }
`;

export const QRLogo = styled.div`
  span:first-child {
    color: ${(props) => props.theme.fontSecondary};
    font-weight: 100;
  }

  strong {
    font-weight: bold;
  }

  span:last-child {
    color: ${(props) => props.theme.fontSecondary};
    font-size: 14px;
  }
`;
