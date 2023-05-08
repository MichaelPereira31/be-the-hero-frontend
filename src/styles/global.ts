import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --black-40: #00000040;
    --white: #FFFFFF;
    --white-100: #edeff4;
    --white-200: #dfe4f7;
    --gray-50: #9D9D9D;
    --gray-100: #3F3F3F;
    --gray-100-21: #F1F1F1;
    --gray-200: #737373;
    --gray-200-21: #73737388;
    --gray-300: #808080;
    --gray-400: #5A5A5A;
    --gray-700: #202020;
    --gray-purple: #706767;
    --gray-purple-20: #70676720;
    --pink-200-13: #c9a0ba21;
    --purple-300-10: #EFE7F2;
    --purple-300-21: #F2EBF4;
    --purple-300-24: #DAC4E1;
    --purple-300: #A294B4;
    --purple-400: #AF82BE;
    --purple-600: #630A80;
    --purple-600-49: #630a807d;
    --purple-600-31: #bfa0c94f;
    --purple-600-25: #630A8040;
    --purple-600-21: #630a8036;
    --purple-600-23: #D9C3DF;
    --purple-600-2: #fcfafc;
    --purple-700: #500669;
    --yellow: yellow;
    --green-100: #d4edda;
    --green-300: #2C7E05;
    --green-400: #32EB4F;
    --green-500: #155724;
    --lime-800: #246406;
    --blue-100: #cce5ff;
    --blue-400: #004085;
    --orange: #D06705;
    --red-200: #AE5050;
    --red-300: #f8d7da;
    --red-400: #e32636;
    --wine-300: #721c24;

    --spacing-0: 2px;
    --spacing-1: 8px;
    --spacing-2: 10px;
    --spacing-3: 16px;
    --spacing-4: 20px;
    --spacing-5: 25px;
    --spacing-6: 32px;
    --spacing-7: 40px;
    --spacing-8: 48px;
    --spacing-9: 56px;
    --spacing-10: 64px;
    --spacing-11: 72px;
    --spacing-12: 80px;
    --spacing-13: 88px;
    --spacing-14: 96px;
    --spacing-15: 160px;

    --fontsize-8: 8px;
    --fontsize-10: 10px;
    --fontsize-11: 11px;
    --fontsize-12: 12px;
    --fontsize-14: 14px;
    --fontsize-16: 16px;
    --fontsize-18: 18px;
    --fontsize-20: 20px;
    --fontsize-24: 24px;
    --fontsize-28: 28px;
    --fontsize-30: 30px;
    --fontsize-32: 32px;
    --fontsize-36: 36px;
    --fontsize-40: 40px;
    --fontsize-45: 45px;
    --fontsize-48: 48px;
    --fontsize-72: 72px;

    --fw-light: 300;
    --fw-regular: 400;
    --fw-semibold: 500;
    --fw-bold: 700;
    --fw-extrabold: 900;
  }

  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    color: var(--black);
    font-family: 'Inter', 'Open Sans', sans-serif;
    width: 100%;
    height: 100vh;
    font-size: 87.5%; // 14px
    @media (max-width: 720px) {
      font-size: 81.25%; // 13px
    }
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    min-height:100vh;
    max-width: 100%;
  }

  a {
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  textarea {
    white-space: revert;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: .6;
  }

  .hide {
    display: none !important;
  }
`

export default GlobalStyles
