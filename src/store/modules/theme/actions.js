export function setTheme(colorSchema) {
  return {
    type: '@theme/SET_THEME',
    payload: { colorSchema },
  };
}
