import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
//import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient:QueryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </QueryClientProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

