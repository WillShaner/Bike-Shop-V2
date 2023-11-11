import './App.css'
import { theme } from './context/theme';
import { ThemeProvider } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}

export default App
