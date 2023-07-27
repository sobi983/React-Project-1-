import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const page = (
//   <div>
//     <h1>This is a header 1</h1>
//     <h2>This is a header 2</h2>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact Us</li>
//     </ul>
//   </div>
// )

// const sobiAppend = ()=>{
//   <div>
//     <p>This is a paragraph</p>
//     <p>This is a second paragraph</p>

//   </div>
// }

// //The elemnts in the webpage always apers in a object format the react chages it and renders it with the additional information.
// ReactDOM.render(page, document.getElementById('root')).append(JSON.stringify(<sobiAppend />))
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
