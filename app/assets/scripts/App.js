var $ = require('jquery');

var Person = require('./modules/Person');

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Person('Jane Smith', 'pink');
jane.greet();
