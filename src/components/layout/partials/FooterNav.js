import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import FooterSocial from './FooterSocial';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <p>Launch by Medici</p>
            {/* <FooterSocial /> */}
    </nav>
  );
}

export default FooterNav;