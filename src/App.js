import Feed from './components/feed/Feed';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './Add';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Rightbar from './components/rightbar/Rightbar';
import Navbar from './components/navbar/Navbar';

function App() {
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar mode={mode} setmode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
