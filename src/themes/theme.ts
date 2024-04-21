import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors';
import "@fontsource/nunito-sans"

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const breakpoints = {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1228px',
    xl: '1690px',
    '2xl': '1980px',
};

const theme = extendTheme({
    config,
    semanticTokens: {
        colors,
    },
    fonts: {
        body: `'Nunito Sans', sans-serif`
    },
    breakpoints: breakpoints,
})

export default theme