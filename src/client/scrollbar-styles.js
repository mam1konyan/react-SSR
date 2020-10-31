import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    ::-webkit-scrollbar {
        background-color: ${({ transparent }) =>
            transparent ? 'transparent' : '#EEF5FF'};
        height: 12px;
        width: 4px;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background: #C1C9E0;
        border-radius: 4px;
    }
`
