'use strict';
var store1 = {
    name: 'PDX Airport',
    minHourlyCustomer: 23,
    maxHourlyCustomer: 65,
    avgCookiesPerCustomer: 6.3,
    id: 'store1',
    numCustomers: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    },
    makeFakeData: function () {
        this.hourlyCookies = [ ];
        for (var i = 0; i < 14; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    }
};

var store2 = {
    name: 'Pioneer Square',
    minHourlyCustomer: 3,
    maxHourlyCustomer: 24,
    avgCookiesPerCustomer: 1.2,
    id: 'store2',    
    numCustomers: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    },
    makeFakeData: function () {
        this.hourlyCookies = [ ];
        for (var i = 0; i < 14; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    }
};

var store3 = {
    name: 'Powell\'s',
    minHourlyCustomer: 11,
    maxHourlyCustomer: 38,
    avgCookiesPerCustomer: 3.7,
    id: 'store3',

    numCustomers: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    },
    makeFakeData: function () {
        this.hourlyCookies = [ ];
        for (var i = 0; i < 14; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    }
};

var store4 = {
    name: 'St. Johns',
    minHourlyCustomer: 20,
    maxHourlyCustomer: 38,
    avgCookiesPerCustomer: 2.3,
    id: 'store4',
    
    numCustomers: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    },
    makeFakeData: function () {
        this.hourlyCookies = [ ];
        for (var i = 0; i < 14; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    }
};

var store5 = {
    name: 'Waterfront',
    minHourlyCustomer: 2,
    maxHourlyCustomer: 16,
    avgCookiesPerCustomer: 4.6,
    id: 'store5',
    
    numCustomers: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    },
    makeFakeData: function () {
        this.hourlyCookies = [ ];
        for (var i = 0; i < 14; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    }
};
// store5.makeFakeData();
// console.log(store5.hourlyCookies);

var allStores = [store1, store2, store3, store4, store5];
for(var i = 0; i <allStores.length; i++){
    var store = allStores[i];
    var section = document.getElementById(store.id);
    var header = document.createElement('h3');
    header.innerText = store.name;
    section.appendChild(header);
}