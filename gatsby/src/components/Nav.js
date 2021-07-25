import React from 'react';
import { Link, navigate } from 'gatsby';

// function goToSliceMasters() {
//   //   1. wait for 2 sec
//   setTimeout(() => {
//     console.log('Go to Slices !!!');
//     navigate('/slicemasters');
//     // navigate('/slicemasters', {replace: true}); if you want user to be able to click back on browser
//   }, 2000);
//   //    2. change the page
// }

// export default function Nav() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/beers">Beers</Link>
//         </li>
//         <li>
//           <button type="button" onClick={goToSliceMasters}>
//             Click me to go to slicemasters in 2sec
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas/">Pizza Menu!</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead !</Link>
        </li>
      </ul>
    </nav>
  );
}
