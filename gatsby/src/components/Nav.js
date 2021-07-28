import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

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

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    margin-top: -6rem;

    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas/">Pizza Menu!</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead !</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
