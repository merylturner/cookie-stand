'use strict';
var times = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
// var totalCookies = [];

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
        this.hourlyCookies = [];
        for (var i = 0; i < 15; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    },
    numCookies: function () {
        var totalCookies = 0;
        for (var i = 0; i < this.hourlyCookies.length; i++) {
            totalCookies += this.hourlyCookies[i];
        }
        return totalCookies;
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
        this.hourlyCookies = [];
        for (var i = 0; i < 15; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    },
    numCookies: function () {
        var totalCookies = 0;
        for (var i = 0; i < this.hourlyCookies.length; i++) {
            totalCookies += this.hourlyCookies[i];
        }
        return totalCookies;
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
        this.hourlyCookies = [];
        for (var i = 0; i < 15; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    },
    numCookies: function () {
        var totalCookies = 0;
        for (var i = 0; i < this.hourlyCookies.length; i++) {
            totalCookies += this.hourlyCookies[i];
        }
        return totalCookies;
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
        this.hourlyCookies = [];
        for (var i = 0; i < 15; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    },
    numCookies: function () {
        var totalCookies = 0;
        for (var i = 0; i < this.hourlyCookies.length; i++) {
            totalCookies += this.hourlyCookies[i];
        }
        return totalCookies;
    }
};

var store5 = {
    name: 'Waterfront',
    minHourlyCustomer: 2,
    maxHourlyCustomer: 16,
    avgCookiesPerCustomer: 4.6,
    id: 'store5',
    // hourlyCookies: [],
    numCustomers: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
    },
    makeFakeData: function () {
        this.hourlyCookies = [];
        for (var i = 0; i < 15; i++) {
            var randCookies = Math.round(this.numCustomers() * this.avgCookiesPerCustomer);
            this.hourlyCookies.push(randCookies);
        }
    },
    numCookies: function () {
        var totalCookies = 0;
        for (var i = 0; i < this.hourlyCookies.length; i++) {
            totalCookies += this.hourlyCookies[i];
        }
        return totalCookies;
    }
};
// store5.makeFakeData();
// console.log(store5.hourlyCookies);

var allStores = [store1, store2, store3, store4, store5];

for (var i = 0; i < allStores.length; i++) {
    var store = allStores[i];
    var section = document.getElementById(store.id);
    var header = document.createElement('h3');
    header.innerText = store.name;
    section.appendChild(header);

    store.makeFakeData();

    var ul = document.createElement('ul');

    for (var j = 0; j < store.hourlyCookies.length; j++) {
        var li = document.createElement('li');
        li.innerText = times[j] + ': ' + store.hourlyCookies[j] + ' cookies';

        ul.appendChild(li);
    }

    li.innerText = 'Total: ' + store.numCookies() + ' cookies';
    section.appendChild(ul);
}


