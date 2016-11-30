/*=============================================================================
 * Copyright (C) 2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import { default as ReactCookieBanner } from 'react-cookie-banner';

const cookieMessage = 'Cookies help us deliver our services. By using our ' +
  ' services, you agree to our use of cookies.';

const CookieBanner = () => (
  <ReactCookieBanner
    disableStyle
    dismissOnScroll={false}
    link={{ url: '/privacy' }}
    message={cookieMessage}
  />
);

export default CookieBanner;
