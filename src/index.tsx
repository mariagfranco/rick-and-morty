import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';

const link = from([new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' })]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
); 