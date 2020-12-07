import React, { Children } from 'react';

const Header = props => {
  const {title, children} = props;
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}

export default Header;