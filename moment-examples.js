var moment = require ('moment');
var now = moment();
console.log(now.format('X'));
console.log(now.format('x'));

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('MMM Do YYYY, hh:mm a'));



console.log(now.format('MMM Do YYYY, hh:mm a'));
