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
var locationPike = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  cookies: function() {
    return Math.round(Math.floor(Math.random() * ((this.max - this.min)) + this.min) * this.avgCookies);
  }
};
console.log(locationPike.cookies);

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var locations1 = document.getElementById('locationPike');

for (var index = 0; index < times.length; index++) {
  console.log(times[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute = ('class', 'times');
  listElement.textContent = times[index] + ': ' +
  locationPike.cookies() + ' cookies';
  locations1.appendChild(listElement);
}

/*
//random # of customers
function customers() {
  return Math.floor(Math.random() * (locationPike[2] - locationPike[1] + 1)) + locationPike[1];
};
console.log(customers());

//amount of cookies
function amtCookies() {
  return customers() * locationPike[3];
}
locationPike.push(amtCookies());
console.log(locationPike);
console.log(amtCookies());
*/
/*
function amtCookies() {
  locationPike.push(Math.floor(Math.random() * (locationPike[2] - locationPike[1] + 1)) + locationPike[1]) * locationPike[3];
}
console.log(amtCookies());
console.log(locationPike);

/*
function amtCookies() {
  amtCustomers
}

var locationPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
};

var locationAirport = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2
};

var locationCenter = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7
};

var locationCapitolHill = {
  name: 'Capitol Hill'
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3
};

var locationAlki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6
};

math.random(locationOne);
*/
