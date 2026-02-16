import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        charcoal: '#1C1F2A',
        midnight: '#222638',
        oat: '#F2E9DC',
        cream: '#FAF6F0',
        pistachio: '#A8C3A0',
        matcha: '#8BAF8C',
        blush: '#E7B7B2',
        apricot: '#E6A57E',
        plum: '#5E4B6E',
    },
    glass: {
        surface: (opacity = 0.15, blur = 12) => `
      background: rgba(255, 255, 255, ${opacity});
      backdrop-filter: blur(${blur}px);
      -webkit-backdrop-filter: blur(${blur}px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    `,
        card: `
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
    `,
    }
};

// Define typescript interface for the theme
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            charcoal: string;
            midnight: string;
            oat: string;
            cream: string;
            pistachio: string;
            matcha: string;
            blush: string;
            apricot: string;
            plum: string;
        };
        glass: {
            surface: (opacity?: number, blur?: number) => string;
            card: string;
        }
    }
}
