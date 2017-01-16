'use strict';

//GENERAL FUNCTION CREATED
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var arrLocations = [];

//Location Object
function Location(name, min, max, avgCookies) {
  this.name = name;
  this. min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.arrayCookies = [];
  this.totalCookies = 0;
};

//Create arrayCookies
Location.prototype.cookies = function() {
  for (var i = 0; i < times.length; i++) {
    var result = Math.round((Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
    console.log(result);
    this.arrayCookies.push(result);
  }
  return result;
};

//Totals
Location.prototype.totals = function() {
  var sum = 0;
  for (var i = 0; i < times.length; i++) {
    sum += this.arrayCookies[i];
    console.log(sum);
  };
  this.arrayCookies.push(sum);
  this.totalCookies = sum;
  return sum;
};

//Render table
// var renderTimes = function() {
//   var cookieTable = document.getElementById('cookie-table');
//
//   var timesRow = document.createElement('tr');
//   var timesHead = document.createElement('th');
//
//   for (var i = 0; i < times.length; i++) {
//     var timesElement = document.createElement[i];
//     timesElement.textContent = times[i];
//     timesRow.appendChild(timesElement);
//   }
// };
var times1 = ['','6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', 'Totals'];

function renderTimes() {
  var cookieTable = document.getElementById('cookie-table');

  var timesRow = document.createElement('tr');

  for (var i = 0; i < times1.length; i++) {
    var timesElement = document.createElement('th');
    console.log(times1[i]);
    timesElement.textContent = times1[i];
    timesRow.appendChild(timesElement);
  };
  cookieTable.appendChild(timesRow);
  console.log('im in renderTimes');
};

function renderTotals() {
  var cookieTable = document.getElementById('cookie-table');

  var totalsRow = document.createElement('tr');
  var blankElement = document.createElement('th');
  blankElement.textContent = 'Totals';
  totalsRow.appendChild(blankElement);

  for (var i = 0; i < times1.length - 1; i++) {
    var totalsHours = 0;
    var totalsFooter = [];

    for (var j = 0; j < arrLocations.length; j++) {
      totalsHours += arrLocations[j].arrayCookies[i];
      console.log(arrLocations[j].arrayCookies[i]);
    }
    var totalsElement = document.createElement('td');
  //  totalsFooter.push(totalsHours);
    totalsElement.textContent = totalsHours;
    totalsRow.appendChild(totalsElement);
  }
  cookieTable.appendChild(totalsRow);
};

Location.prototype.render = function() {
  var cookieTable = document.getElementById('cookie-table');

  var cookieRow = document.createElement('tr');
  var rowHeader = document.createElement('th');

  rowHeader.textContent = this.name;
  cookieRow.appendChild(rowHeader);

  for (var j = 0; j < this.arrayCookies.length; j++) {
    console.log(this.arrayCookies[j]);
    var tableElement = document.createElement('td');
    tableElement.textContent = this.arrayCookies[j];
    cookieRow.appendChild(tableElement);
  }

  // var rowTotals = document.createElement('td');
  // rowTotals.textContent = this.totalCookies;
  // cookieRow.appendChild(rowTotals);

  cookieTable.appendChild(cookieRow);
};

renderTimes();

var locationPike = new Location('1st and Pike', 23, 65, 6.3);
console.log(locationPike);
locationPike.cookies();
locationPike.totals();
locationPike.render();
arrLocations.push(locationPike);

var locationAirport = new Location('SeaTac Airport', 3, 24, 1.2, []);
console.log(locationAirport);
locationAirport.cookies();
locationAirport.totals();
locationAirport.render();
arrLocations.push(locationAirport);

var locationCenter = new Location('Seattle Center', 11, 38, 3.7, []);
console.log(locationCenter);
locationCenter.cookies();
locationCenter.totals();
locationCenter.render();
arrLocations.push(locationCenter);

var locationCapitolHill = new Location('Capitol Hill', 20, 38, 2.3, []);
console.log(locationCapitolHill);
locationCapitolHill.cookies();
locationCapitolHill.totals();
locationCapitolHill.render();
arrLocations.push(locationCapitolHill);

var locationAlki = new Location('Alki', 2, 16, 4.6, []);
console.log(locationAlki);
locationAlki.cookies();
locationAlki.totals();
locationAlki.render();
arrLocations.push(locationAlki);

renderTotals();

//New Location
var formEl = document.getElementById('cookie-form');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();

  var nameNew = event.target.name.value;
  var minNew = event.target.min.value;
  var maxNew = event.target.max.value;
  var avgCookiesNew = event.target.avgCookies.value;
  console.log(nameNew);
  console.log(minNew);
  console.log(maxNew);
  console.log(avgCookiesNew);

  var locationNew = new Location(nameNew, minNew, maxNew, avgCookiesNew);
  console.log(locationNew);
  locationNew.cookies();
  locationNew.totals();
  locationNew.render();
  arrLocations.push(locationNew);
  renderTotals();

});
