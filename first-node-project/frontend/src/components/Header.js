import React, { Children } from 'react';

const Header = props => {
  const {title} = props;
  console.log("vendo cindle", children)
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;