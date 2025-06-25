import React from 'react';

function App() {
  const value = 'HH';
  var User = {};
  async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
  }

  (async () => {
  User = await getUserInfo();
  // console.log(User);
  console.log(await getUserInfo());
  })();
  
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

  return (<div>
  <div>Hello</div>
  <a href="/.auth/login/aad">Microsoft login</a> 
  </div>
  )
  ;
}

export default App;
