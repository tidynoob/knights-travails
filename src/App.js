import React from 'react';
import {
  ChakraProvider,
  theme,
  Box,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
// import Main from './components/Main';
// import knightMoves from './knightMoves';

function App() {

  return (
    <ChakraProvider theme={theme} >
      <Box display="grid" gridTemplateRows="auto 1fr" height="100vh">
        <Navbar />
        {/* <Main /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
