import styled from "styled-components";

import { dark } from "../../styles/colors";

const colorSchema = dark;

const mediaWidthSize = "800px";

export const Container = styled.div`
  padding: 0 20px;
  margin: 60px auto;
  max-width: 800px;
`;

export const Content = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: ${colorSchema.background};
  border-radius: 4px;
  color: ${colorSchema.fontPrimary};

  div:first-child {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${mediaWidthSize}) {
    & {
      flex-direction: column;

      div:first-child {
        align-items: center;
      }
    }
  }
`;

export const Information = styled.div`
  strong {
    display: block;
    font-size: 24px;
  }

  p {
    text-align: left;
    margin: 20px 0;
    width: 60%;
    font-size: 14px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 14px;

    svg {
      margin-left: 4px;
    }
  }

  @media only screen and (max-width: ${mediaWidthSize}) {
    & {
      display: flex;
      align-items: center;
      flex-direction: column;

      p,
      span,
      strong {
        text-align: center;
      }
    }
  }
`;

export const Input = styled.textarea`
  width: 415px;
  display: block;
  min-height: 200px;
  resize: vertical;
  padding: 20px;
  font-size: 20px;
  border: 0;
  color: ${colorSchema.fontPrimary};
  background: ${colorSchema.secondary};
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: ${mediaWidthSize}) {
    & {
      resize: none;
      width: 80%;
    }
  }
`;

export const QRContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px 40px 40px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  svg {
    padding: 4px;
    margin: 20px;
  }

  @media only screen and (max-width: ${mediaWidthSize}) {
    & {
      margin: 20px 0;
    }
  }
`;

export const DownloadButton = styled.button`
  margin: 0 40px;
  height: 30px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: ${colorSchema.primary};
  color: ${colorSchema.fontPrimary};

  &:hover {
    background: ${colorSchema.secondary};
  }
`;
