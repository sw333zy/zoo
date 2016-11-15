(function() {
  'use strict';



function Animal(name, dob){
    this.name = name || 'Random';
    this.dob = dob || 0;
}


console.log( new Animal('sandy', 11));



}());
