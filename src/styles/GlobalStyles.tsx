import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

*::before,
*::after {
    box-sizing: border-box;
}

a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}
button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

li {
    list-style-type: none;
}

body {
    background-color:${({ theme }) => theme.backGround};
    font-size: 18px;
    font-family: ${({ theme }) => theme.font};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
`;
