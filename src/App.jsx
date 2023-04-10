import { useState } from 'react'
import { useQuery, gql } from '@apollo/client';

import './App.css'


const GET_CUSTOMERS = gql`
  query{
  test
  }
`;




function App() {
  
  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
  
      <p >
      {data.test}
      </p>
  )
}

export default App
