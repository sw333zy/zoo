(function() {
    'use strict';

    window.zoo = window.zoo || {};
    window.zoo.animal = Animal;
    window.zoo.Polarbear = Polarbear;
    window.zoo.Koalabear = Koalabear;


    /**
     * A new protoype of an animal
     * @param {string} name an animals name
     * @param {number} dob  an animals age
     */
    function Animal(name, dob) {
        this.name = name || 'Random';
        this.dob = dob || 3;
    }

    // var dateString = '2007-11-21';

    Animal.prototype.getAge = function getAge(dob) {
        var birthday = new Date(dob);
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getFullYear() - 1970);

    };





    //Polar Bear


    /**
     * A Polarbear constructor
     * @param {string} name my Polarbears name
     * @param {number} dob  polarbears date of birth
     */
    function Polarbear(name, dob) {
        Animal.apply(this, [name, dob]);


        this.name = name || 'Guy';

        console.log(this, arguments);
    }
    Polarbear.prototype = Object.create(Animal.prototype);
    Polarbear.prototype.constructor = Polarbear;
    Polarbear.prototype.species = 'Polarbear';

    Polarbear.prototype.kill = function kill(animals) {
        return 'picked ' + animals + ' bones';

    };

    var pb = new Polarbear('Pete', 36585937283836);

    console.log(pb.getAge('2007-11-21'));
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

    /**
     * A Koalabear constructor
     * @param {string} name My Koalabear's name
     * @param {number} dob  Koalabear's date of birth
     */
    function Koalabear(name, dob) {
        Animal.apply(this, [name, dob]);


        this.name = name || 'Gal';

        console.log(this, arguments);
    }
    Koalabear.prototype = Object.create(Animal.prototype);
    Koalabear.prototype.constructor = Koalabear;
    Koalabear.prototype.species = 'Koalabear';


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

    //var x equals new animal is object
    //instance of animal









}());
