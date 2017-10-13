var crystal = {
    secretNumber: 0,
    updateSecret: function(){
        let min = Math.ceil(1);
        let max = Math.floor(20);
        this.secretNumber =  Math.floor(Math.random() * (max - min)) + min;
    }
}

var crystal1 = Object.create(crystal);
var crystal2 = Object.create(crystal);
var crystal3 = Object.create(crystal);
var crystal4 = Object.create(crystal);

crystal1.updateSecret();
console.log(crystal1.secretNumber);

crystal2.updateSecret();
console.log(crystal2.secretNumber);

crystal3.updateSecret();
console.log(crystal3.secretNumber);

crystal4.updateSecret();
console.log(crystal4.secretNumber);