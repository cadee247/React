import React from 'react';
import Products from './Products';
import Nicknames from './Nicknames';

const App = () => {
  const user = {
    firstName: "Jada",
    lastName: "Mathele"
  };

  return (
    <div>
      <h1>My First React App!</h1>
      <Products />
      <Nicknames /> 

      <h1>Hi there, {user.firstName} {user.lastName}!</h1>
    </div>
  );
};

export default App;