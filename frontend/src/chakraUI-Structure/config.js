import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/theme-utils'

const styles = {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props), //text color
        bg: mode('gray.100', '#101010')(props), //light mode and Dark mode for bg
      }
    })
  };

  const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
  }

  const colors = {
    gray: {
      light: "#616161",
      dark: "#1e1e1e",
    }
  }

export const theme = extendTheme({ config, styles, colors })