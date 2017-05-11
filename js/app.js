'use strict';
var tableHeaderData = ['Location', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', 'Daily Location Total'];
var totalCookiesOfHour = [];

//create constructor function holding parameters for each store object 
function Store(name, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerCustomer) {
    this.name = name;
    this.minHourlyCustomer = minHourlyCustomer;
    this.maxHourlyCustomer = maxHourlyCustomer;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;

    // generate random number customers per hour
    this.numCustomers = function () {
        // console.log()
        return Math.floor((Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer)) + this.minHourlyCustomer);

    };
    //create total number of cookies per hour and calculate total
    this.makeFakeData = function () {
        //create total number of cookies per hour
        this.hourlyCookies = [];

        for (var i = 0; i < 15; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
        //create total number of cookies per day
        this.numCookies = function () {
            var totalCookies = 0;
            for (var i = 0; i < this.hourlyCookies.length; i++) {
                totalCookies += this.hourlyCookies[i];
            }
            return totalCookies;
        };
    };
}
        //create total cookies for specific hour
        // this.totalHoursCookies = function () {
        //     var hoursCookies = 0;
        //     console.log(hoursCookies);
        //     for (var i = 0; i < this.totalCookiesOfHour.length; i++) {
        //         hoursCookies += this.totalCookiesOfHour[i];
        //     }
        //     return hoursCookies;
        // };

        // function totalHoursCookies() {
            
        //     var hoursCookies = 0;
        //     for (var i = 0; i < this.totalCookiesOfHour.length; i++) {
        //         hoursCookies += this.totalCookiesOfHour[i];
        //     }
        //     return hoursCookies;
        // };
//create instances of each store below using constructor function above
var pdx = new Store('PDX Airport', 23, 65, 6.3);
var pioneer = new Store('Pioneer Square', 3, 24, 1.2);
var powells = new Store('Powell\'s', 11, 38, 3.7);
var stJohns = new Store('St. John\'s', 20, 38, 3.2);
var waterfront = new Store('Waterfront', 2, 16, 4.6);

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

    var hoursOp = document.createElement('tr');
    tableHeader.appendChild(hoursOp);

    var hoursOpCell = document.createElement('td');
    hoursOpCell.setAttribute('colspan', 17);
    hoursOpCell.innerText = 'Hours of Operation';
    hoursOp.appendChild(hoursOpCell);

    for (var i = 0; i < tableHeaderData.length; i++) {
        var header = document.createElement('th');
        header.innerText = tableHeaderData[i];
        tableHeader.appendChild(header);
    }
    //create header row on top of hours that says 'hours of operation'
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

    //create last cell for sum of all cookies for each store
    var lastCell = document.createElement('td');
    lastCell.innerText = this.numCookies();
    row.appendChild(lastCell);


};

//create footer for sum of all stores' cookies at hour x 
// function renderFooter() {

//     var tableFooter = document.createElement('tfoot');
//     var footerRow = document.createElement('tr');
//     var footerCell = document.createElement('td');
//     footerCell.innerText = totalHoursCookies();
//     footerRow.appendChild(footerCell);
//     table.appendChild(footerRow);
// }
//call header function to display header information
renderHeader();

//call render function for each store to display data
pdx.render();
pioneer.render();
powells.render();
stJohns.render();
waterfront.render();

//call footer function to display footer information
// renderFooter();

//get access to form in HTML, add event listener to submit data when addNewStore is called
var newStore = document.getElementById('addStore');
newStore.addEventListener('submit', addNewStore);

//addNewStore takes user input from form and adds to table
function addNewStore(event) {
    event.preventDefault();

    var form = event.target;
    var name = form.name.value;
    var min = parseInt(form.min.value);
    var max = parseInt(form.max.value);
    var avg = parseInt(form.avg.value);

    var newSt = new Store(name, min, max, avg);
    console.log(newSt);

    newSt.render();
}



