// Import the React and ReactDom librairies
import React from 'react';
import ReactDOM from 'react-dom';


// function getButtonText() {
//   return 'Click on me!'
// }

// Create a react component
const App = () => {
  const buttonText = { text: "Click me"};
  const labelText = "Enter a name:";

  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white', borderRadius: '5px', border: '1px solid black'}}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
