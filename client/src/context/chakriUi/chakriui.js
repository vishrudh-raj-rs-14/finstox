// chakra-ui.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Customize the Chakra UI theme here
});

export default function ChakraUIProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
