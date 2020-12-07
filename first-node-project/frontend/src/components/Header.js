import React, { Children } from 'react';

const Header = props => {
  const {title} = props;
  return (
    <header>
      <h1>{title}</h1>
      {Children}
    </header>
  );
}

export default Header;