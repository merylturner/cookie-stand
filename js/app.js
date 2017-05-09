'use strict';
// var times = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];


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
var allStores = [pdx, pioneer, powells, stJohns, waterfront ];

//create variable for table
var table = document.getElementById('datatable');

//render function
function render (cellType, content, row) {
    var cell = document.createElement(cellType);
    cellType.innerText = content;
    row.appendChild(cell);
}
//create render function to create cells for each store
Store.prototype.render = function () {
    this.makeFakeData ();
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
}

pdx.render();

    // for (var i = 0; i < allStores.length; i++) {
    //     var store = allStores[i];
    //     var section = document.getElementById(store.id);
    //     var header = document.createElement('h3');
    //     header.innerText = store.name;
    //     section.appendChild(header);

    //     store.makeFakeData();

    //     var ul = document.createElement('ul');

    //     for (var j = 0; j < store.hourlyCookies.length; j++) {
    //         var li = document.createElement('li');
    //         li.innerText = times[j] + ': ' + store.hourlyCookies[j] + ' cookies';

    //         ul.appendChild(li);
    //     }

    //     li.innerText = 'Total: ' + store.numCookies() + ' cookies';
    //     section.appendChild(ul);
    // }


