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
        // it('should make a prototype animal when given no arguments', function() {
        //     expect(new window.zoo.Animal()).to.be.an('object');
        // });
        it('should give a TypeError if anything other than a string is given', function() {
            try {
                new window.zoo.Animal(112);
            } catch (err) {
                expect(err).to.be.an.instanceof(TypeError);
            }
        });

    });
    //every function is an object but not every object is a function
    describe('Polarbear Constructor', function() {
        it('should make a Polarbear when called', function() {
            expect(window.zoo.Polarbear).to.be.a('function');
        });
        it('should be able to make a baby', function(){
          var pb = new window.zoo.Polarbear('Patricia', 9);
          var baby = pb.birth();
          expect(baby).to.be.an.instanceof(window.zoo.Polarbear);
          expect(baby.name).to.equal('Phillip');
        });
        it('should be able to kill what I want it to', function() {
            var pb = new window.zoo.Polarbear('jordan', 8);
            console.log(pb);

            var kill = pb.kill('dog');
            expect(kill).to.be.a('string');
            expect(kill).to.equal('picked dog bones');

        });
        it('should give a TypeError if not given a string', function() {
            try {
                var pb = new window.zoo.Polarbear('jordan', 8);
                console.log(pb);
                pb.kill();
            } catch (err) {
                expect(err).to.be.an.instanceof(TypeError);
            }
        });


    });

    describe('Koalabear Constructor', function() {
        it('should make a Koalabear when called', function() {
            expect(window.zoo.Koalabear).to.be.a('function');
        });
        it('should be able to make a baby', function(){
          var kb = new window.zoo.Koalabear('karen', 9);
          var baby = kb.birth();
          expect(baby).to.be.an.instanceof(window.zoo.Koalabear);
          expect(baby.name).to.equal('Kristina');
        });

        it('should be able to climb what I tell it to', function(){
          var kb = new window.zoo.Koalabear('jane', 7);
          console.log(kb);

          var climb = kb.climb('a tree');
          expect(climb).to.be.a('string');
          expect(climb).to.equal('climbed up a tree');

        });
        it('should give a TypeError if not given a string', function(){
          try{
            var kb = new window.zoo.Koalabear('jane', 7);
            console.log(kb);
            kb.climb();
          }
          catch(err){
            expect(err).to.be.an.instanceof(TypeError);
          }
        });
    });





    console.log('good to go');

}());
