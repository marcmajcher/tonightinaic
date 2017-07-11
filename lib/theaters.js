'use strict';

/* eslint-env node */

const cheerio = require('cheerio');
const request = require('request');

/*

http://www.hideouttheatre.com/calendar?ajaxCalendar=1&month=8&year=2017&orderby=event_date_start%2Cstart_time%2Cevent_name&category=1&em_ajax=1

https://theinstitutiontheater.thundertix.com/reports/calendar?start=1501390800&end=1504414800&_=1499804319790

https://www.newmovementtheater.com/api/open/GetItemsByMonth?month=July-2017&collectionId=59362a2eb8a79b549463bded

https://www.eventbrite.com/eventcalendar
POST
eid=35421379299&date=2017%2F07%2F22&multevent=1&org=5925672367

*/

exports.hideout = (date) => {
  const url = `http://www.hideouttheatre.com/calendar?ajaxCalendar=1&month=${date.getMonth() + 1}&year=${date.getFullYear()}&orderby=event_date_start%2Cstart_time%2Cevent_name&category=1&em_ajax=1
`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(body);
      const test = $('td.eventful').text();
      console.log(test);
    }
  });

  return `Hideout for ${date.getMonth() + 1}/${date.getDate()}, ${date.getFullYear()}`;
};

exports.tit = (date) => {
  return `Institution for ${date.getMonth() + 1}/${date.getDate()}, ${date.getFullYear()}`;
};

exports.tnm = (date) => {
  return `New Movement for ${date.getMonth()+1}/${date.getDate()}, ${date.getFullYear()}`;
};

exports.ctt = (date) => {
  return `Coldtownefor ${date.getMonth()+1}/${date.getDate()}, ${date.getFullYear()}`;
};
