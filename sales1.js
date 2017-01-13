'use strict';

var times = ['', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm'];

//Location Object
function Location(name, min, max, avgCookies) {
  this.name = name;
  this. min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.arrayCookies = [];
  this.total = total;
};

 //Generate random # for arrayCookies
Location.prototype.cookies = function() {
  var result = Math.round(Math.floor(Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
  this.arrayCookies.push(result);
  console.log(this.arrayCookies);
};

Location.prototype.total = function() {
  for (var i = 0; i < times.length; i++) {
    var sum = 0;
    sum += this.arrayCookies;
    this.total.push(sum);
  }
};

var Pike = new Location('Pike', 2, 20, 6);
console.log(Pike);
