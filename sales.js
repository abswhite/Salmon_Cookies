var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

//PIKE
var locationPike = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  sumCookies: [],
  cookies: function() {
    var result = Math.round(Math.floor(Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
    this.sumCookies.push(result);
    return result;
  }
};

var locations1 = document.getElementById('locationPike');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute = ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationPike.cookies() + ' cookies';
  locations1.appendChild(listElement);
}

var s = 0;
for(var i = 0; i < locationPike.sumCookies.length; i++) {
  s += locationPike.sumCookies[i];
};
console.log(locationPike.sumCookies);
console.log(s);

var locationsTotal1 = document.getElementById('locationPike');
var listElement = document.createElement('li');
listElement.setAttribute = ('class', 'times');
listElement.textContent = 'Total: ' + s + ' cookies';
locationsTotal1.appendChild(listElement);
/*
//AIRPORT
var locationAirport = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  sumCookies: [],
  cookies: function() {
    var result = Math.round(Math.floor(Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
    this.sumCookies.push(result);
    return result;
  }
};

var locations2 = document.getElementById('locationAirport');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute = ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationAirport.cookies() + ' cookies';
  locations2.appendChild(listElement);
}

var locationsTotal2 = document.getElementById('locationAirport');
var listElement = document.createElement('li');
listElement.setAttribute = ('class', 'times');
listElement.textContent = 'Total: ' + locationAirport.cookies() + ' cookies';
locationsTotal2.appendChild(listElement);

// Center
var locationCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  sumCookies: [],
  cookies: function() {
    var result = Math.round(Math.floor(Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
    this.sumCookies.push(result);
    return result;
  }
};

var locations3 = document.getElementById('locationCenter');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute = ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationCenter.cookies() + ' cookies';
  locations3.appendChild(listElement);
}

var locationsTotal3 = document.getElementById('locationCenter');

var listElement = document.createElement('li');
listElement.setAttribute = ('class', 'times');
listElement.textContent = 'Total: ' + locationCenter.cookies() + ' cookies';
locationsTotal3.appendChild(listElement);

//Capitol Hill
var locationCapitolHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  sumCookies: [],
  cookies: function() {
    var result = Math.round(Math.floor(Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
    this.sumCookies.push(result);
    return result;
  }
};

var locations4 = document.getElementById('locationCapitolHill');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute = ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationCapitolHill.cookies() + ' cookies';
  locations4.appendChild(listElement);
}

var locationsTotal4 = document.getElementById('locationCapitolHill');

var listElement = document.createElement('li');
listElement.setAttribute = ('class', 'times');
listElement.textContent = 'Total: ' + locationCapitolHill.sum4 + ' cookies';
locationsTotal4.appendChild(listElement);

//Alki
var locationAlki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  sumCookies: [],
  cookies: function() {
    var result = Math.round(Math.floor(Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
    this.sumCookies.push(result);
    return result;
  }
};

var locations5 = document.getElementById('locationAlki');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute = ('class', 'times');
  listElement.textContent = 'Total: ' + locationAlki.cookies() + ' cookies';
  locations5.appendChild(listElement);
}

var locationsTotal5 = document.getElementById('location');

/*var locationPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
};

function customers() {
  return Math.floor(Math.random() * (locationPike.maxCustomers - locationPike.minCustomers)) + locationPike.minCustomers;
};
console.log(customers());
locationPike.randCustomer = customers();
console.log(locationPike);
////
getRandomArtbitrary(min,max)
  return Math.floor(Math.random() * (this.max-this.min) + this.min);

var locations = ['1st and Pike', 'SeaTac Airport'];
var minCustomers = [23, 3];
var maxCustomers = [65, 24];
var avgCookies = [6.3, 1.2];

function amtCookies() {
  locationPike.push(Math.floor(Math.random() * (maxCustomers[0] - minCustomers[0] + 1)) + minCustomers[0]) * avgCookies[0];}

  function amtCookies() {
    locationPike.push(Math.floor(Math.random() * (locationPike[2] - locationPike[1] + 1)) + locationPike[1]) * locationPike[3];
  }
  console.log(amtCookies());
  console.log(locationPike);
*/
/////////////////////////
