'use strict';
var tableHeaderData = ['Location', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', 'Daily Location Total'];

//create constructor function holding parameters for each store object 
function Store(name, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerCustomer, id) {
    this.name = name;
    this.minHourlyCustomer = minHourlyCustomer;
    this.maxHourlyCustomer = maxHourlyCustomer;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.id = id;
    // generate random number customers per hour
    this.numCustomers = function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    }
    // console.log(this.numCustomers);
    //create total number of cookies per hour
    this.makeFakeData = function () {
        this.hourlyCookies = [];
        for (var i = 0; i < 15; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
        // console.log(this.hourlyCookies);
        //create total number of cookies per day
        this.numCookies = function () {
            var totalCookies = 0;
            for (var i = 0; i < this.hourlyCookies.length; i++) {
                totalCookies += this.hourlyCookies[i];
            }
            return totalCookies;
        }
        // console.log(this.totalCookies);
    }
}
//create instances of each store below using constructor function above

var pdx = new Store('PDX Airport', 23, 65, 6.3, 'store1');
var pioneer = new Store('Pioneer Square', 3, 24, 1.2, 'store2');
var powells = new Store('Powell\'s', 11, 38, 3.7, 'store3');
var stJohns = new Store('St. John\'s', 20, 38, 3.2, 'store4');
var waterfront = new Store('Waterfront', 2, 16, 4.6, 'store5');

//create array of all store objects and their data
var allStores = [pdx, pioneer, powells, stJohns, waterfront];

//create variable for table
var table = document.getElementById('datatable');

//render function to create cells
function render(cellType, content, row) {
    var cell = document.createElement(cellType);
    cellType.innerText = content;
    row.appendChild(cell);
}

//render function to create and fill header cells
function renderHeader() {
    var tableHeader = document.createElement('thead');

    for (var i = 0; i < tableHeaderData.length; i++) {
        var header = document.createElement('th');
        header.innerText = tableHeaderData[i];
        tableHeader.appendChild(header);
    }
    table.appendChild(tableHeader);
}

//create render function to create cells for each store
Store.prototype.render = function () {
    this.makeFakeData();
    var row = document.createElement('tr');
    var cellName = document.createElement('td');
    cellName.innerText = this.name;
    row.appendChild(cellName);

    for (var i = 0; i < this.hourlyCookies.length; i++) {
        var cell = document.createElement('td');
        cell.innerText = this.hourlyCookies[i];
        row.appendChild(cell);
    }
    table.appendChild(row);

    var lastCell = document.createElement('td');
    lastCell.innerText = this.numCookies();
    row.appendChild(lastCell);

}
//call render function for each store to display data
pdx.render();
pioneer.render();
powells.render();
stJohns.render();
waterfront.render();

//call header function to display header information
renderHeader();


