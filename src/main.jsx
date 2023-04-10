import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';


const headers = {
  'Content-Type': 'application/json',
  'access-token': localStorage.getItem('access-token'),
  access: 'inHouse'
};


    
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('access-token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ,
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
