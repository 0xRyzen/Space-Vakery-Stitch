import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        charcoal: '#4A4063', // Deep dusky violet
        midnight: '#4A4063', // Deep dusky violet
        oat: '#FFF0F5', // Lavender blush / soft white
        cream: '#FFF0F5', // Lavender blush / soft white
        pistachio: '#B5EAD7', // Pastel mint
        matcha: '#B5EAD7', // Pastel mint
        blush: '#FFDAC1', // Pastel peach
        apricot: '#FFDAC1', // Pastel peach
        plum: '#C7CEEA', // Pastel periwinkle
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
