import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const anotherUser = (
//   <a href="https://google.com" target='_blank'>Visit Google </a>
// )

// const chai = 'chai aur code';
// const newElement = React.createElement(
//   'a',
//   {href: 'https://youtube.com', target: '_blank'},
//   'click me pls i am youtuber ',
//   chai
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>, 
  // anotherUser,
  // newElement
)
