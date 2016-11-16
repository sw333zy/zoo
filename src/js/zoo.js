(function() {
    'use strict';



    function Animal(name, dob) {
        this.name = name || 'Random';
        this.dob = dob || 3;
    }

    // var dateString = '2007-11-21';

    Animal.prototype.getAge = function getAge() {

    // THIS WILL WORK UNSURE HOW TO CALL
    //   function getAge(dateString) {
    //     var birthday = new Date(dateString);
    //     var ageDifMs = Date.now() - birthday.getTime();
    //     var ageDate = new Date(ageDifMs); // miliseconds from epoch
    //     return Math.abs(ageDate.getFullYear() - 1970);
    //   }
    };



    //Polar Bear

    function Polarbear(name, dob) {
        Animal.apply(this, [name]);

        this.species = 'Polarbear';
        this.name = name || 'Guy';

        console.log(this, arguments);
    }
    Polarbear.prototype = Object.create(Animal.prototype);
    Polarbear.prototype.constructor = Polarbear;

    Polarbear.prototype.kill = function kill(animals) {
        return 'picked ' + animals + ' bones';

    };

    var pb = new Polarbear('Pete', 36585937283836);

    console.log(pb.getAge());
    console.log(pb.kill('dog'));
    console.log(pb);

    Polarbear.prototype.birth = function birth() {
      return new Polarbear('Phillip', 56556447646994);
    };

    console.log(pb.birth());


    // function getAge(birth) {
    // var ageMS = Date.parse(Date()) - Date.parse(birth);
    // var age = new Date();
    // age.setTime(ageMS);
    // ageYear = age.getFullYear() - 1970;
    //
    // console.log(new Date);
    //

    //Koala Bear

    function Koalabear(name, dob) {
        Animal.apply(this, [name]);

        this.species = 'Koalabear';
        this.name = name || 'Gal';

        console.log(this, arguments);
    }
    Koalabear.prototype = Object.create(Animal.prototype);
    Koalabear.prototype.constructor = Koalabear;

    Koalabear.prototype.climb = function climb(structure) {
        return 'climbed up' + ' ' + structure;

    };

    var kb = new Koalabear('Kelly', 36585937555836);

    console.log(kb.getAge());
    console.log(kb.climb('a tree'));
    console.log(kb);

    Koalabear.prototype.birth = function birth() {
      return new Koalabear('Kristina', 56556447646444);
    };

    console.log(kb.birth());









}());
