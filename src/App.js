import React from 'react';
import { useState,useEffect } from 'react';
function App() {
  // const value = 'HH';
  // var User = {};
  // async function getUserInfo() {
  //   const response = await fetch('/.auth/me');
  //   const payload = await response.json();
  //   const { clientPrincipal } = payload;
  //   return clientPrincipal;
  // }

  // (async () => {
  // // User = await getUserInfo();
  // // console.log(User);
  // console.log(await getUserInfo());
  // })();
  
  // const UseApiData = (url) => {
  const url = '/.auth/me'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('API request failed', error);
      } finally {
        setLoading(false);
      }
    };
  fetchData();
  }, []);
  if (loading) return(
    <div>
  <div>Loading data....</div>
    <a href="/.auth/login/aad">Microsoft login</a> 
  </div>
  );
  if (!data) return(
    <div>
  <div>No data available</div>
    <a href="/.auth/login/aad">Microsoft login</a> 
  </div>
  );

  return (
    <div>
      <h1>Data Loaded</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
  // };


  // fetch('/.auth/me')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json(); // Parse the JSON from the response
  //   })
  //   .then(data => {
  //     User = data
  //     console.log('Data received:', data); // Handle the data
  //   })
  //   .catch(error => {
  //     console.error('Error occurred:', error); // Handle errors
  //   });

  // return (<div>
  // <div>Hello {value}</div>
  // <a href="/.auth/login/aad">Microsoft login</a> 
  // </div>
  // )
  ;
}

export default App;
