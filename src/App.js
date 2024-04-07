import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './Components/Landing';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
function App() {
  return (
    <ChakraProvider >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
