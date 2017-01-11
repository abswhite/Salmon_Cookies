
//GENERAL FUNCTION CREATED
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var totals = [];

function Location(name, min, max, avgCookies, arrayCookies) {
  this.name = name;
  this. min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.arrayCookies = arrayCookies;
};
//ADD 'COOKIESSUM' FUNCTION TO 'LOCATION'
Location.prototype.cookies = function() {
  var result = Math.round(Math.floor(Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
  this.arrayCookies.push(result);
  return result;
};

//'LOCATIONPIKE' INSTANCE OF 'LOCATION'
var locationPike = new Location('1st and Pike', 23, 65, 6.3, []);
console.log(locationPike);

var myList = document.getElementById('locationPike');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationPike.cookies() + ' cookies';
  myList.appendChild(listElement);
}

//sum array
var s = 0;
for(var i = 0; i < locationPike.arrayCookies.length; i++) {
  s += locationPike.arrayCookies[i];
};
totals.push(s);
console.log(totals);

var locationsTotal = document.getElementById('locationPike');
var listElement = document.createElement('li');
listElement.setAttribute ('class', 'cookieTotal');
listElement.textContent = 'Total: ' + s + ' cookies';
locationsTotal.appendChild(listElement);

//AIRPORT LOCATION
var locationAirport = new Location('SeaTac Airport', 3, 24, 1.2, []);
console.log(locationAirport);

var myList = document.getElementById('locationAirport');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationAirport.cookies() + ' cookies';
  myList.appendChild(listElement);
}

var s = 0;
for(var i = 0; i < locationAirport.arrayCookies.length; i++) {
  s += locationAirport.arrayCookies[i];
};
totals.push(s);
console.log(totals);

var locationsTotal = document.getElementById('locationAirport');
var listElement = document.createElement('li');
listElement.setAttribute ('class', 'cookieTotal');
listElement.textContent = 'Total: ' + s + ' cookies';
locationsTotal.appendChild(listElement);

//SEATTLE CENTER
var locationCenter = new Location('Seattle Center', 11, 38, 3.7, []);
console.log(locationCenter);

var myList = document.getElementById('locationCenter');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationCenter.cookies() + ' cookies';
  myList.appendChild(listElement);
}

var s = 0;
for(var i = 0; i < locationCenter.arrayCookies.length; i++) {
  s += locationCenter.arrayCookies[i];
};
totals.push(s);
console.log(totals);

var locationsTotal = document.getElementById('locationCenter');
var listElement = document.createElement('li');
listElement.setAttribute ('class', 'cookieTotal');
listElement.textContent = 'Total: ' + s + ' cookies';
locationsTotal.appendChild(listElement);

//CAPITOL HILL
var locationCapitolHill = new Location('Capitol Hill', 20, 38, 2.3, []);
console.log(locationCapitolHill);

var myList = document.getElementById('locationCapitolHill');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationCapitolHill.cookies() + ' cookies';
  myList.appendChild(listElement);
}

var s = 0;
for(var i = 0; i < locationCapitolHill.arrayCookies.length; i++) {
  s += locationCapitolHill.arrayCookies[i];
};
totals.push(s);
console.log(totals);

var locationsTotal = document.getElementById('locationCapitolHill');
var listElement = document.createElement('li');
listElement.setAttribute ('class', 'cookieTotal');
listElement.textContent = 'Total: ' + s + ' cookies';
locationsTotal.appendChild(listElement);

//ALKI
var locationAlki = new Location('Alki', 2, 16, 4.6, []);
console.log(locationAlki);

var myList = document.getElementById('locationAlki');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute ('class', 'times');
  listElement.textContent = times[index] + ': ' + locationAlki.cookies() + ' cookies';
  myList.appendChild(listElement);
}

var s = 0;
for(var i = 0; i < locationAlki.arrayCookies.length; i++) {
  s += locationAlki.arrayCookies[i];
};
totals.push(s);
console.log(totals);

var locationsTotal = document.getElementById('locationAlki');
var listElement = document.createElement('li');
listElement.setAttribute ('class', 'cookieTotal');
listElement.textContent = 'Total: ' + s + ' cookies';
locationsTotal.appendChild(listElement);

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
times.push('');

var totalArray = [locationPike.arrayCookies, locationAirport.arrayCookies, locationCenter.arrayCookies, locationCapitolHill.arrayCookies, locationAlki.arrayCookies];
console.log(totalArray);

var tableEl = document.getElementById('cookie-table');

for(var index = 0; index < times.length; index++) {
  var headData = times[index];
  var headEl = document.createElement('th');
  headEl.textContent = headData;
  console.log(headEl);
  tableEl.appendChild(headEl);
}

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
}
