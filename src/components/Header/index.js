import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSun } from 'react-icons/fi/';
import { RiMoonClearLine } from 'react-icons/ri/';

import { Container, Content, QRLogo } from './style.js';

import { dark, light } from '../../styles/colors';

import { setTheme } from '../../store/modules/theme/actions';

export default function Header() {
  const dispatch = useDispatch();
  const themeName = useSelector((state) => state.theme.themeName);

  function handleChangeTheme() {
    const nextTheme = themeName === 'dark' ? light : dark;

    dispatch(setTheme(nextTheme));
  }

  return (
    <Container>
      <Content>
        <QRLogo href="https://github.com/angeloevangelista/qrcode-generator">
          <span>QR</span>
          <strong>Code</strong>
          <span>Generator</span>
        </QRLogo>

        <button type="button" onClick={handleChangeTheme}>
          {themeName === 'dark' ? (
            <FiSun size={32} title="Hey! Visit the repo in the console" />
          ) : (
            <RiMoonClearLine
              size={32}
              title="Hey! Visit the repo in the console"
            />
          )}
        </button>
      </Content>
    </Container>
  );
}
