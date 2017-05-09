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
    var PDX = new Store('PDX Airport', 23, 65, 6.3, 'store1');
    var Pioneer = new Store('Pioneer Square', 3, 24, 1.2, 'store2');
    var Powells = new Store('Powell\'s', 11, 38, 3.7, 'store3');
    var StJohns = new Store('St. John\'s', 20, 38, 3.2, 'store4');
    var Waterfront = new Store('Waterfront', 2, 16, 4.6, 'store5');


    //store 1 object
    // var store1 = {
    //     name: 'PDX Airport',
    //     minHourlyCustomer: 23,
    //     maxHourlyCustomer: 65,
    //     avgCookiesPerCustomer: 6.3,
    //     id: 'store1',
    //     //numCustomers calculate random # of customers per hour
    //     numCustomers: function () {
    //         return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    //     },
    //     //makeFakedata creates data for cookies per hour per customer, and adds to the hourlyCookies array each time 
    //     makeFakeData: function () {
    //         this.hourlyCookies = [];
    //         for (var i = 0; i < 15; i++) {
    //             var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
    //             this.hourlyCookies.push(randCookies);
    //         }
    //     },
    //     //numCookies creates array for totalCookies and adds each item in hourlyCookies array to create sum of all cookies
    //     numCookies: function () {
    //         var totalCookies = 0;
    //         for (var i = 0; i < this.hourlyCookies.length; i++) {
    //             totalCookies += this.hourlyCookies[i];
    //         }
    //         return totalCookies;
    //     }
    // };

    // //store 2 object
    // var store2 = {
    //     name: 'Pioneer Square',
    //     minHourlyCustomer: 3,
    //     maxHourlyCustomer: 24,
    //     avgCookiesPerCustomer: 1.2,
    //     id: 'store2',
    //     numCustomers: function () {
    //         return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    //     },
    //     makeFakeData: function () {
    //         this.hourlyCookies = [];
    //         for (var i = 0; i < 15; i++) {
    //             var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
    //             this.hourlyCookies.push(randCookies);
    //         }
    //     },
    //     numCookies: function () {
    //         var totalCookies = 0;
    //         for (var i = 0; i < this.hourlyCookies.length; i++) {
    //             totalCookies += this.hourlyCookies[i];
    //         }
    //         return totalCookies;
    //     }
    // };

    // //store 3 object
    // var store3 = {
    //     name: 'Powell\'s',
    //     minHourlyCustomer: 11,
    //     maxHourlyCustomer: 38,
    //     avgCookiesPerCustomer: 3.7,
    //     id: 'store3',

    //     numCustomers: function () {
    //         return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    //     },
    //     makeFakeData: function () {
    //         this.hourlyCookies = [];
    //         for (var i = 0; i < 15; i++) {
    //             var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
    //             this.hourlyCookies.push(randCookies);
    //         }
    //     },
    //     numCookies: function () {
    //         var totalCookies = 0;
    //         for (var i = 0; i < this.hourlyCookies.length; i++) {
    //             totalCookies += this.hourlyCookies[i];
    //         }
    //         return totalCookies;
    //     }
    // };

    // //store 4 object
    // var store4 = {
    //     name: 'St. Johns',
    //     minHourlyCustomer: 20,
    //     maxHourlyCustomer: 38,
    //     avgCookiesPerCustomer: 2.3,
    //     id: 'store4',

    //     numCustomers: function () {
    //         return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    //     },
    //     makeFakeData: function () {
    //         this.hourlyCookies = [];
    //         for (var i = 0; i < 15; i++) {
    //             var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
    //             this.hourlyCookies.push(randCookies);
    //         }
    //     },
    //     numCookies: function () {
    //         var totalCookies = 0;
    //         for (var i = 0; i < this.hourlyCookies.length; i++) {
    //             totalCookies += this.hourlyCookies[i];
    //         }
    //         return totalCookies;
    //     }
    // };

    // //store 5 object
    // var store5 = {
    //     name: 'Waterfront',
    //     minHourlyCustomer: 2,
    //     maxHourlyCustomer: 16,
    //     avgCookiesPerCustomer: 4.6,
    //     id: 'store5',
    //     // hourlyCookies: [],
    //     numCustomers: function () {
    //         return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    //     },
    //     makeFakeData: function () {
    //         this.hourlyCookies = [];
    //         for (var i = 0; i < 15; i++) {
    //             var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
    //             this.hourlyCookies.push(randCookies);
    //         }
    //     },
    //     numCookies: function () {
    //         var totalCookies = 0;
    //         for (var i = 0; i < this.hourlyCookies.length; i++) {
    //             totalCookies += this.hourlyCookies[i];
    //         }
    //         return totalCookies;
    //     }
    // };


    // var allStores = [store1, store2, store3, store4, store5];

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


