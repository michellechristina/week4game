
var game = {
  goalNumber: 0,
  win: 0,
  lose: 0,
  scoreboard: 0,

  goalNumberValues: function () {
    this.goalNumber = Math.floor(Math.random() * 102) + 19;
    // console.log("goal:" +this.goalNumber);
  },

  start: function () {
    // this.crystalValue = 0;
    this.goalNumberValues();
    // this.crystalRandomValues();
    this.scoreboard = 0;
    $("#score").text(this.scoreboard);
    $("#goalNumberValues").text(this.goalNumber);
    // this gives each crystal a new random value
    crystalOne.reset();
    crystalTwo.reset();
    crystalThree.reset();
    crystalFour.reset();

    console.log(this);
  }
}



var crystalOne = {
  // the value of the crystal
  secretValue: 0,
  // this creates a random number between 1-10
  updateSecretValue: function () {
    this.secretValue = [Math.floor(Math.random() * 10) + 1];
  },
  //create function, makes an img tag, adds css tag, image path
  create: function () {
    var imageCrystalOne = $("<img>");
    imageCrystalOne.addClass("crystal-image");
    imageCrystalOne.attr("src", "assets/images/coffee1.gif");
    //this creates id tag and appends the variable and associated stuff in it
    $("#crystalOne").append(imageCrystalOne);
    //this calls the function so that a new random number is generated  
    this.updateSecretValue();
    imageCrystalOne.attr("data-crystalvalue", this.secretValue);


  },
  reset: function () {
    this.updateSecretValue();
  }
}

var crystalTwo = {
  secretValue: 0,
  updateSecretValue: function () {
    this.secretValue = [Math.floor(Math.random() * 10) + 1];
  },

  create: function () {
    var imageCrystalTwo = $("<img>");
    imageCrystalTwo.addClass("crystal-image");
    imageCrystalTwo.attr("src", "assets/images/coffee2.gif");
    $("#crystalTwo").append(imageCrystalTwo);
    this.updateSecretValue();
    imageCrystalTwo.attr("data-crystalvalue", this.secretValue);


  },
  reset: function () {
    this.updateSecretValue();
  }
}

var crystalThree = {
  secretValue: 0,
  updateSecretValue: function () {
    this.secretValue = [Math.floor(Math.random() * 10) + 1];
  },

  create: function () {
    var imageCrystalThree = $("<img>");
    imageCrystalThree.addClass("crystal-image");
    imageCrystalThree.attr("src", "assets/images/coffee3.gif");
    $("#crystalThree").append(imageCrystalThree);
    this.updateSecretValue();
    imageCrystalThree.attr("data-crystalvalue", this.secretValue);

  },
  reset: function () {
    this.updateSecretValue();
  }
}

var crystalFour = {
  secretValue: 0,
  updateSecretValue: function () {
    this.secretValue = [Math.floor(Math.random() * 10) + 1];
  },

  create: function () {
    var imageCrystalFour = $("<img>");
    imageCrystalFour.addClass("crystal-image");
    imageCrystalFour.attr("src", "assets/images/coffee4.gif");
    $("#crystalFour").append(imageCrystalFour);
    this.updateSecretValue();
    imageCrystalFour.attr("data-crystalvalue", this.secretValue);


  },
  reset: function () {
    this.updateSecretValue();
  }
}

crystalOne.create();
crystalTwo.create();
crystalThree.create();
crystalFour.create();
game.start();


$(".crystal-image").on("click", function () {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  game.scoreboard += crystalValue;
  //this makes the button images fade in and out
  $(this).fadeIn(100).fadeOut(100).fadeIn(100);
  $("#score").text(game.scoreboard);

  if (game.scoreboard === game.goalNumber) {
    alert("You win!");
    $("#wins").text(++game.win);
    game.start();
  } else if (game.scoreboard >= game.goalNumber) {
    alert("You lose!!");
    $("#losses").text(++game.lose);
    game.start();
  }
});


