import React from 'react';

function App() {
  const value = 'HH';

  async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    console.log(clientPrincipal)
    return clientPrincipal;
  }


  return (<div>
  <div>Hello {value}</div>
  <a href="/.auth/login/aad">Microsoft login</a> 
  <button onClick={getUserInfo()}></button>
  </div>
  )
  ;
}

export default App;
