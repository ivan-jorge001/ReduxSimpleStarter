import React from 'react';
import ReactDom from 'react-dom'
// create a new component . this componentshould produce some html
const API_KEY = ''
const App = () => {
  return (
    <div>Hi!</div>
  )
}

ReactDom.render(<App/>,document.querySelector('.container'))

// take this component genereated html and put it
// onthe page in the DOM
