import React, { Children } from 'react';

const Header = (props) => {
  const {title, children} = props;
  console.log(props);
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;