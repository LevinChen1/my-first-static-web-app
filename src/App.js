import React from 'react';

function App() {
  const value = 'HH';

  async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
  }

  (async () => {
  console.log(await getUserInfo());
  })();


  return (<div>
  <div>Hello {value}</div>
  <a href="/.auth/login/aad">Microsoft login</a> 
  </div>
  )
  ;
}

export default App;
