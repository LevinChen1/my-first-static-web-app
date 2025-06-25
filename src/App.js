import React from 'react';

function App() {
  const value = 'HH';

  function getUserInfo() {
    const response = fetch('/.auth/me');
    const payload = response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
  }



  return (<div>
  <div>Hello {value}</div>
  <a href="/.auth/login/aad">Microsoft login</a> 
  <button onclick="getUserInfo()"></button>
  </div>
  )
  ;
}

export default App;
