/*=============================================================================
 * Copyright (C) 2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import moment from 'moment';

moment.updateLocale('en', {
  longDateFormat: {
    LT: 'HH:mm',
    L: 'ddd Do MMM YYYY',
    l: 'dd D MM YYYY'
  }
});

export const lowerCaseCalendarConfig = {
  lastDay: '[yesterday at] LT',
  sameDay: '[today at] LT',
  nextDay: '[tomorrow at] LT',
  lastWeek: '[last] dddd [at] LT',
  nextWeek: 'dddd [at] LT',
  sameElse: 'L [at] LT'
};

export function lowerCaseCalendar(date) {
  return moment(date).calendar(null, lowerCaseCalendarConfig);
}

export function upperCaseCalendar(date) {
  return moment(date).calendar();
}

const timestampFormat = "YYYY-MM-DD HH:mm:ss Z";

export function timestamp(date) {
  return moment(date).format(timestampFormat);
}
