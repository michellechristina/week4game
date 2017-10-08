// 4 crystal images, each assigned random number value between 1-12 at the beginning of the game
// a random goal number between 19-120 is displayed at the beginning of the game. 
// players number scoreboard is set to 0 at beginning of game
// game wins and losses scoreboards are both set to 0 at beginning of game.

// when a crystal is clicked, the number value is added to the player's scoreboard.

// if players scoreboard value equals goal number value, then player wins (alert win msg). Win scoreboard is updated by 1 and game restarts.
// if players scoreboard value is greater than goal number value, then player looses (alert lose msg). Loss scoreboard is updated by 1 and game restarts.
   

   var game = {
    // crystalValue: 0,
    goalNumber: 0,
    win: 0,
    lose: 0,
    scoreboard: 0,

    // crystalRandomValues: function() {
    //   this.crystalValue = [Math.floor(Math.random() * 10) + 1];
    // },
    
    goalNumberValues: function() {
      this.goalNumber = Math.floor(Math.random() * 102) + 19;
      // console.log("goal:" +this.goalNumber);
    },

    start: function() {
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
    secretValue:0,
    // this creates a random number between 1-10
    updateSecretValue : function(){
      this.secretValue = [Math.floor(Math.random() * 10) + 1];
    },
    //create function, makes an img tag, adds css tag, image path
    create: function(){
    var imageCrystalOne = $("<img>");
    imageCrystalOne.addClass("crystal-image");
    imageCrystalOne.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
     //this creates id tag and appends the variable and associated stuff in it
     $("#crystalOne").append(imageCrystalOne);
    //this calls the function so that a new random number is generated  
    this.updateSecretValue();
    imageCrystalOne.attr("data-crystalvalue", this.secretValue);
   
   
    },
    reset: function() {
      this.updateSecretValue();
    }
  }

  var crystalTwo = {
      secretValue:0,
      updateSecretValue : function(){
        this.secretValue = [Math.floor(Math.random() * 10) + 1];
      },

      create: function(){
      var imageCrystalTwo = $("<img>");
      imageCrystalTwo.addClass("crystal-image");
      imageCrystalTwo.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
      $("#crystalTwo").append(imageCrystalTwo);
      this.updateSecretValue();
      imageCrystalTwo.attr("data-crystalvalue", this.secretValue);
  
      
      },
      reset: function() {
        this.updateSecretValue();
      }
    }

    var crystalThree = {
      secretValue:0,
      updateSecretValue : function(){
        this.secretValue = [Math.floor(Math.random() * 10) + 1];
      },

      create: function(){
      var imageCrystalThree = $("<img>");
      imageCrystalThree.addClass("crystal-image");
      imageCrystalThree.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
      $("#crystalThree").append(imageCrystalThree);
      this.updateSecretValue();
      imageCrystalThree.attr("data-crystalvalue", this.secretValue);
      
      },
      reset: function() {
        this.updateSecretValue();
      }
    }

    var crystalFour = {
      secretValue:0,
      updateSecretValue : function(){
        this.secretValue = [Math.floor(Math.random() * 10) + 1];
      },

      create: function(){
      var imageCrystalFour = $("<img>");
      imageCrystalFour.addClass("crystal-image");
      imageCrystalFour.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
      $("#crystalFour").append(imageCrystalFour);
      this.updateSecretValue();
      imageCrystalFour.attr("data-crystalvalue", this.secretValue);
      
      
      },
      reset: function() {
        this.updateSecretValue();
      }
    }

    crystalOne.create();
    crystalTwo.create();
    crystalThree.create();
    crystalFour.create();
  game.start();
  //this makes a new random number
  // game.crystalRandomValues();
  

  // $("#score").text(game.scoreboard);

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    game.scoreboard += crystalValue;
    // alert("New score: " + game.scoreboard);
    $("#score").text(game.scoreboard);
    
        if (game.scoreboard === game.goalNumber) {
          alert("You win!");
          $("#wins").text(game.win++);
          game.start();
        }
    
        else if (game.scoreboard >= game.goalNumber) {
          alert("You lose!!");
          $("#losses").text(game.lose++);
          game.start();
        }
      });
    

    


    //determines which key is being clicked, and subtracts 1 from guess counter.
    document.onkeyup = function (event) {
      game.guessCount--;
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      //pushes the user guess (key clicked) into the incorrect letters array
      game.incorrectLetters.push(userGuess);
      game.updateguessCount();
      game.updateGuessesSoFar();

      if (game.guessCount > 0) {
        if (userGuess == game.anwser) {
          game.wins++;
          document.querySelector('#wins').innerHTML = game.wins;
          alert("Correct! You Win!");
          game.start();
        }
      } else if (game.guessCount == 0) {
        // Then we will loss and we'll update the html to display the loss 
        game.losses++;
        document.querySelector('#losses').innerHTML = game.losses;
        alert("Game over! Try again!");
        // makes the game start over & resets counters. 
        game.start();
      }
    };
 

    


  //  }
  //  var game = {
  //     abcArray: "abcdefghijklmnopqrstuvwxyz".split(""),
  //     anwser: "",
  //     wins: 0,
  //     losses: 0,
  //     guesses: 0,
  //     guessCount: 0,
  //     incorrectLetters: [],
  //     updateAnwser: function () {
  //       this.anwser = this.abcArray[Math.floor(Math.random() * this.abcArray.length)];
  //     },
  //     updateguessCount: function () {
  //       document.querySelector('#guessLeft').innerHTML = this.guessCount;
  //     },
  //     updateGuessesSoFar: function () {
  //       document.querySelector('#letter').innerHTML = this.incorrectLetters.join(', ');
  //     },
  //     start: function () {
  //       this.guessCount = 10;
  //       this.incorrectLetters = [];
  //       this.updateguessCount();
  //       this.updateGuessesSoFar();
  //       this.updateAnwser();
  //     }
  //   }

  //   // var str = "abcdefghijklmnopqrstuvwxyz";
  //   // // this makes each letter its' own index
  //   // var abcArray = str.split("");
  //   // //this makes each letter uppercase and its own index
  //   // console.log(abcArray);

  //   // //this pulls out a random letter from the abcArray to use for the anwser
  //   // var anwser = abcArray[Math.floor(Math.random() * str.length)];

  //   // //Wins and losses for game
  //   // var wins = 0;
  //   // var losses = 0;
  //   // //how many guesses you start with
  //   // var guesses = 10;
  //   // //how many guesses you have left
  //   // var guessCount = 10;
  //   // //an empty array to stick your guessed letters in
  //   // var incorrectLetters = [];

  //   // var letterToGuess = null;


  //   // // get random letter
  //   // var updateLetterToGuess = function () {
  //   //   letterToGuess = anwser[Math.floor(Math.random() * anwser.length)];
  //   // };

  //   // //Allows the user 10 guesses
  //   // var updateguessCount = function () {
  //   //   // get the HTML element and setting it equal to the guessCount
  //   //   document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessCount;
  //   // };

  //   // // Takes the guesses that have been tried & displays as letters separated by commas. 
  //   // var updateGuessesSoFar = function () {
  //   //   document.querySelector('#letter').innerHTML = "Your Guesses so far: " + incorrectLetters.join(', ');
  //   // };
  //   // // resets everything back to starting point
  //   // var start = function () {
  //   //   guessCount = 10;
  //   //   incorrectLetters = [];
  //   //   updateLetterToGuess();
  //   //   updateguessCount();
  //   //   updateGuessesSoFar();
  //   // }

  //   // this works to kick off the game for the first time too.
  //   game.start();



  //   //determines which key is being clicked, and subtracts 1 from guess scoreboard.
  //   document.onkeyup = function (event) {
  //     game.guessCount--;
  //     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  //     //pushes the user guess (key clicked) into the incorrect letters array
  //     game.incorrectLetters.push(userGuess);
  //     game.updateguessCount();
  //     game.updateGuessesSoFar();

  //     if (game.guessCount > 0) {
  //       if (userGuess == game.anwser) {
  //         game.wins++;
  //         document.querySelector('#wins').innerHTML = game.wins;
  //         alert("Correct! You Win!");
  //         game.start();
  //       }
  //     } else if (game.guessCount == 0) {
  //       // Then we will loss and we'll update the html to display the loss 
  //       game.losses++;
  //       document.querySelector('#losses').innerHTML = game.losses;
  //       alert("Game over! Try again!");
  //       // makes the game start over & resets scoreboards. 
  //       game.start();
  //     }
  //   };
 