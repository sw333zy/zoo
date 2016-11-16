(function() {
    'use strict';
    window.zoo = window.zoo || {};
    var expect = chai.expect;

    describe('Namespace Test', function() {
        it('should show window.zoo to be a namespace', function() {
            expect(window.zoo).to.be.a('object');
        });
    });

    describe('Animal constructor function test', function() {
        it('makes a new animal when name and dob are passed into the argument', function() {
            expect(new window.zoo.Animal('maria', 5)).to.be.an('object');
        });
        it('should make a prototype animal when given no arguments', function() {
            expect(new window.zoo.Animal()).to.be.an('object');
        });

    });
    //every function is an object but not every object is a function
    describe('Polarbear Constructor', function() {
        it('should make a Polarbear when called', function() {
            expect(window.zoo.Polarbear).to.be.a('function');
        });


    });

    describe('Koalabear Constructor', function(){
          it('should make a Koalabear when called', function(){
              expect(window.zoo.Koalabear).to.be.a('function');

        });
    });





    console.log('good to go');

}());
