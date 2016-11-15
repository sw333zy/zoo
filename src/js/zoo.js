(function() {
    'use strict';



    function Animal(name, dob) {
        this.name = name || 'Random';
        this.dob = dob || 3;
    }

    Animal.prototype.getAge = function getAge() {
        console.log(this.date);
        return 5;
    };

    //Polar Bear

    function Polarbear(name, dob) {
        Animal.apply(this, [name]);

        this.species = 'Polarbear';
        // this.role = role || 'killer bear';
        // if (typeof(Animal) === 'boolean') {
        //     this.hat = hat;
        //  } else {
        // //     // this is still a DEFAULT value, just a different way to do it
        //      this.hat = false;
        //  }

        console.log(this, arguments);
    }
    Polarbear.prototype = Object.create(Animal.prototype);
    Polarbear.prototype.constructor = Polarbear;

    Polarbear.prototype.kill = function kill(animals) {
        return 'picked ' + animals + ' bones';

    };

    var pb = new Polarbear('Guy', 36585937283836);

    console.log(pb.getAge());
    console.log(pb.kill('dog'));
    console.log(pb);

    // var koalaBear = new Animal('Gal', 36585937285556);
    //
    // console.log(koalaBear, koalaBear.getAge());

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
        // this.role = role || 'killer bear';
        // if (typeof(Animal) === 'boolean') {
        //     this.hat = hat;
        //  } else {
        // //     // this is still a DEFAULT value, just a different way to do it
        //      this.hat = false;
        //  }

        console.log(this, arguments);
    }
    Koalabear.prototype = Object.create(Animal.prototype);
    Koalabear.prototype.constructor = Koalabear;

    Koalabear.prototype.climb = function climb(structure) {
        return 'climbed up' + ' ' + structure;

    };

    var kb = new Koalabear('Gal', 36585937555836);

    console.log(kb.getAge());
    console.log(kb.climb('a tree'));
    console.log(kb);









}());
