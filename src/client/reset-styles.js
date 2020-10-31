import { createGlobalStyle } from 'styled-components'
/**
 * http://meyerweb.com/eric/tools/css/reset/
 * v2.0 | 20110126
 * License: none (public domain)
 */
const ResetStyles = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
        font: 16px Montserrat;
        font-weight: 400;
    }
    body {
        position: relative;
        margin: 0;
        width: 100vw;
        min-height: 100vh;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font-family: Montserrat;
    }
    button {
        font-family: Montserrat;
    }
    input, textarea {
        font: 16px Montserrat;
    }
    ::placeholder {
      color: #9AA6C8;
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
     color: #9AA6C8;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
     color: #9AA6C8;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
        q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    input[type=file], /* FF, IE7+, chrome (except button) */
    input[type=file]::-webkit-file-upload-button { /* chromes and blink button */
      cursor: pointer; 
    }
`

export default ResetStyles
