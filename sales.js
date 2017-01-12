'use strict';

//GENERAL FUNCTION CREATED
var times = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', 'totals'];

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
    var result = Math.round((Math.floor(Math.random() * ((this.max - this.min)) + this.min)) * this.avgCookies);
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

  var rowTotals = document.createElement('td');
  rowTotals.textContent = this.totalCookies;
  cookieRow.appendChild(rowTotals);

  cookieTable.appendChild(cookieRow);
};

var locationPike = new Location('1st and Pike', 23, 65, 6.3);
console.log(locationPike);
locationPike.cookies();
locationPike.totals();
locationPike.render();

var locationAirport = new Location('SeaTac Airport', 3, 24, 1.2, []);
console.log(locationAirport);
locationAirport.cookies();
locationAirport.totals();
locationAirport.render();

var locationCenter = new Location('Seattle Center', 11, 38, 3.7, []);
console.log(locationCenter);
locationCenter.cookies();
locationCenter.totals();
locationCenter.render();

var locationCapitolHill = new Location('Capitol Hill', 20, 38, 2.3, []);
console.log(locationCapitolHill);
locationCapitolHill.cookies();
locationCapitolHill.totals();
locationCapitolHill.render();

var locationAlki = new Location('Alki', 2, 16, 4.6, []);
console.log(locationAlki);
locationAlki.cookies();
locationAlki.totals();
locationAlki.render();

// //New Location
// var formEl = document.getElementById('cookie-form');
//
// formEl.addEventListener('submit', function(event){
//   event.preventDefault();
//   event.stopPropagation();
//

///NEW LOCATION

var formEl = document.getElementById('cookie-form');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();
  nameEl.name = renderName(event.target.name.value);
  this.min = parseInt(renderMin(event.target.min.value));
  this.max = parseInt(renderMax(event.target.max.value));
  this.avgCookies = parseInt(renderAvgCookies(event.target.avgCookies.value));
  console.log(this.min);
  console.log(nameEl.name);

  // renderName(event.target.name.value);
  // renderMin(event.target.min.value);
  // renderMax(event.target.max.value);
  // renderAvgCookies(event.target.avgCookies.value);
}, false);

function renderName(name) {
  var sectionEl = document.getElementById('cookie-section');

  var nameEl = document.createElement('td');
  nameEl.setAttribute('class', 'entered-value');
  nameEl.textContent = name;
  console.log(name);
  newLoc.push(name);

  sectionEl.appendChild(nameEl);
};
function renderMin(min) {
  var sectionEl = document.getElementById('cookie-section');

  var minEl = document.createElement('td');
  minEl.setAttribute('class', 'entered-value');
  minEl.textContent = min;
  console.log(min);
  sectionEl.appendChild(minEl);
};
function renderMax(max) {
  var sectionEl = document.getElementById('cookie-section');

  var maxEl = document.createElement('td');
  maxEl.setAttribute('class', 'entered-value');
  maxEl.textContent = max;
  console.log(max);

  sectionEl.appendChild(maxEl);
};
function renderAvgCookies(avgCookies) {
  var sectionEl = document.getElementById('cookie-section');

  var avgCookiesEl = document.createElement('td');
  avgCookiesEl.setAttribute('class', 'entered-value');
  avgCookiesEl.textContent = avgCookies;
  console.log(avgCookies);

  sectionEl.appendChild(avgCookiesEl);
};
var newLoc = [formEl.name, formEl.min, formEl.max, formEl.avgCookies];
console.log(formEl.name);
console.log(newLoc);

var locationNew = new Location(newLoc[0], parseInt(newLoc[1]), parseInt(newLoc[2]), parseInt(newLoc[3]),[]);
console.log(locationNew);

var myList = document.getElementById('locationNew');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationNew.cookies() + ' cookies';
  //myList.appendChild(listElement);
}

var s = 0;
for(var i = 0; i < locationNew.arrayCookies.length; i++) {
  s += locationNew.arrayCookies[i];
};
totals.push(s);
console.log(totals);

var locationsTotal = document.getElementById('locationNew');
var listElement = document.createElement('li');
listElement.setAttribute ('class', 'cookieTotal');
listElement.textContent = 'Total: ' + s + ' cookies';
//locationsTotal.appendChild(listElement);
////////////

//times , arrayCookies
locationPike.arrayCookies.unshift('1st and Pike');
locationPike.arrayCookies.push(totals[0]);
locationCenter.arrayCookies.unshift('Seattle Center');
locationCenter.arrayCookies.push(totals[2]);
locationAirport.arrayCookies.unshift('SeaTac Airport');
locationAirport.arrayCookies.push(totals[1]);
locationCapitolHill.arrayCookies.unshift('Capitol Hill');
locationCapitolHill.arrayCookies.push(totals[3]);
locationAlki.arrayCookies.unshift('Alki');
locationAlki.arrayCookies.push(totals[4]);
times.unshift('');
times.push('Total');
locationNew.arrayCookies.unshift('New Location');
locationNew.arrayCookies.push(totals[5]);

var totalArray = [locationPike.arrayCookies, locationAirport.arrayCookies, locationCenter.arrayCookies, locationCapitolHill.arrayCookies, locationAlki.arrayCookies, locationNew.arrayCookies];
console.log(totalArray);

var tableEl = document.getElementById('cookie-table');



for(var i = 0; i < totalArray.length; i++) {
  var rowData = totalArray[i];

  var rowEl = document.createElement('tr');

  for (var j = 0; j < rowData.length; j++) {
    var content = rowData[j];

    var dataEl = document.createElement('td');
    dataEl.textContent = content;
    console.log('rowel',rowEl);
    rowEl.appendChild(dataEl);
  }

  tableEl.appendChild(rowEl);
};
