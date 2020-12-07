import React, { Children } from 'react';

const Header = (props, children) => {
  const {title} = props;
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;