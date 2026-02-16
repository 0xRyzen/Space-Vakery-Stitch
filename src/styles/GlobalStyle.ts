import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --selection-color: ${props => props.theme.colors.pistachio}40;
  }

  ::selection {
    background: var(--selection-color);
    color: ${props => props.theme.colors.charcoal};
  }

  body {
    background-color: ${props => props.theme.colors.cream};
    color: ${props => props.theme.colors.charcoal};
    overflow-x: hidden;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.cream}; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.matcha}80; 
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.matcha}; 
  }
`;
