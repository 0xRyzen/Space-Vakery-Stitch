import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        charcoal: '#000511', // Very dark blue/black
        midnight: '#000511', // Very dark blue/black
        oat: '#E8EAF6', // Cool silver/white
        cream: '#E8EAF6', // Cool silver/white
        pistachio: '#5C6BC0', // Soft indigo
        matcha: '#5C6BC0', // Soft indigo
        blush: '#9FA8DA', // Light indigo
        apricot: '#9FA8DA', // Light indigo
        plum: '#3949AB', // Rich blue
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
