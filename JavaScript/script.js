/*
*Variables and data types
*/ 

/*
var firstname = 'Shreya';
console.log(firstname);

var lastname = 'Nogja';
console.log(lastname);

var age = 17;

var fullage = true;
console.log(fullage);

var job;
console.log(job);

job = 'teacher';
console.log(job);

//variable naming rules
var _3years = 3;
var shreyariya = 'shreya and riya';
*/

/**
 * Variable mutation and type coercion
 */

 /*
 var firstname = 'Shreya';
 var age = '17';

 console.log(firstname + ' '+ age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstname + ' is a '+ age + ' year old ' + job +'. Is she married? ' + isMarried)

 //Variable mutation
 age = 'seventeen';
 job = 'learner';

 alert(firstname + ' is a '+ age + ' year old ' + job +'. Is she married? ' + isMarried)

 var lastName = prompt('What is his last Name?');
 console.log(firstname + ' ' + lastName);
 */





 /************
 * Basic Operators
 */
 
 /******
 var now = 30 , year = 2020
 ageShreya = 18
 ageRiya = 9
 //Math Operators
 var yearShreya = year - ageShreya;
 var yearRiya = year - ageRiya;
 console.log(yearShreya);
 console.log(yearRiya);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 //Logical operators
 var RiyaOlder = ageShreya > ageRiya;
 console.log(RiyaOlder);

 //typeof operator
 console.log(typeof RiyaOlder);
 console.log(typeof ageShreya);
 console.log(typeof 'Shreya is older than Riya');
 var x;
 console.log(typeof x);
 ******/

 /****************
 * Operator precedence
 */

 /*
 var now = 2018;
 var yearShreya = 2000;
 var fullage = 18;

 // Multiple operators
 var isfullage = now - yearShreya >= fullage;//true
 console.log(isfullage);

 // Grouping
 var ageShreya = now - yearShreya;
 var ageRiya = 9;
 var average = (ageShreya + ageRiya) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6;  // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

 // More operators
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);6
 x--;
 console.log(x);
 */

 // Coding challenge

 /** 
 var massMark = 80; // kg
 var heightMark = 160;  //centimeter

 var massJohn = 33; //kg
 var heightJohn = 130; //centimeter

 var BMIMark = massMark / (heightMark * heightMark);
 var BMIJohn = massJohn / (heightJohn * heightJohn);
 console.log(BMIMark, BMIJohn);

 var markHigherBMI = BMIMark > BMIJohn;
 console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI); 
 **/

 /*************
 *If / else statements 
 */
 
 /* 
 var firstname = 'Shreya';
 var civilStatus = 'Single';

 if (civilStatus === 'Married') {
     console.log(firstname + ' is Married!');
 } else{
     console.log(firstname + ' will hopefully marry soon :)');
 }

 var isMarried = true;
 if (isMarried) {
    console.log(firstname + ' is Married!');
} else{
    console.log(firstname + ' will hopefully marry soon :)');
}
 

 var massMark = 80; // kg
 var heightMark = 160;  //centimeter

 var massJohn = 40; //kg
 var heightJohn = 130; //centimeter

 var BMIMark = massMark / (heightMark * heightMark);
 var BMIJohn = massJohn / (heightJohn * heightJohn);

 if (BMIMark > BMIJohn){
     console.log('Mark\'s BMI is higher than John\s.');
 } else{
    console.log('John\'s BMI is higher than Marks\s.');
 }
 
 /**
  * Boolean logic
  */
  /*
  var firstname = 'Shreya';
  var age = 20;

  if (age < 13){
    console.log(firstname + ' is a girl.');
  } else if(age >= 13 && age < 20) { 
    console.log(firstname + ' is a teenager.'); 
  }  else if (age >= 20 && age < 30) {
    console.log(firstname + ' is a young women.');
  }else {
    console.log(firstname + ' is a women.');
  }
  */

 /****************
  * The ternary Operator and Switch Statements
  */

  /*
 var firstname = 'John';
 var age = 30;

 // Ternary Operator
 age >= 18 ? console.log(firstname + ' drink beer.'):console.log(firstname + ' drinks juice.');

 var drink = age>= 18 ? 'beer' : 'juice';
 console.log(drink);

  if (age>= 18) {
   var drink = 'beer';
 } else {
   var drink = 'juice';
 } */
  
 // Switch statement
 /*
 var job = 'instructor';
 switch (job) {
   case 'teacher':
   case 'instructor':
     console.log(firstname + ' teaches kids how to code.');
     break;
   case 'driver':
     console.log(firstname + ' drives an uber in lisbon.');
     break;
   case 'designer':
     console.log(firstname + ' designs beautiful websites.');
     break;
   default:
     console.log(firstname + ' does something else.');
 }
 

 switch (true) {
   case age < 13;
     console.log(firstname + ' is a girl.');
     break;
     case age >= 13 && age < 20:
     console.log(firstname + ' is a teenager.');
     case age > 20 && age < 30:
      console.log(firstname + ' young man.'); 
  }



 /*
  var firstname = 'Shreya';
  var age = 20;

  if (age < 13){
    console.log(firstname + ' is a girl.');
  } else if(age >= 13 && age < 20) { 
    console.log(firstname + ' is a teenager.'); 
  }  else if (age >= 20 && age < 30) {
    console.log(firstname + ' is a young women.');
  }else {
    console.log(firstname + ' is a women.');
  }
  */


 /***********************************
  * Truthy and Falsy values and equality operators
  */
 
 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values 

 /*
 var height;

 height = '20';

 if (height || height === 0) {
   console.log('Variable is defined');
 } else {
   console.log('Variable has NOT been defined');
 }

 // Equaliy opeartors
 if (height === '20') {
   console.log('The == operator does type coercion');
 }
 */

 // Coding  Challenge 2
  /*
 var scoreJohn = (189 + 120 + 103) / 3;
 var scoreMike = (129 + 94 + 123) / 3;
 var scoreMary = (97 + 134 + 105) / 3;
 console.log(scoreJohn, scoreMike, scoreMary);

 if (scoreJohn > scoreMike && scoreJohn > scoreMary)
  {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
  } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
  } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
  } else {
    console.log('There is a draw');
  }



 /* if (scoreJohn > scoreMike) {
   console.log('John\'s team wins with ' + scoreJohn + ' points');
 } else if (scoreMike > scoreJohn) {
  console.log('Mike\'s team wins with ' + scoreMike + ' points');
 } else {
   console.log('There is a draw');
 }*/
 

 /*******************
  * Functions
  */
 
  /* 
  function calculateAge(birthYear) {
    return 2020 - birthYear;
  }

  var ageShreya = calculateAge(2002);
  var ageMahek = calculateAge(1940);
  var ageShruti = calculateAge(2003);
  console.log(ageShreya, ageMahek, ageShruti);


  function yearsUntilRetirement(year, firstname)
  {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0) {
      console.log(firstname + ' retires in ' + retirement + ' years.');
    } else {
      console.log(firstname + ' is already retired.');
    }

  }

 yearsUntilRetirement(2002, 'Shreya');
 yearsUntilRetirement(1940, 'Mahek');
 yearsUntilRetirement(2003, 'Shruti');


 /****************************************
 *  Function Statements and Expressions
 */
 
 // Function declarion 
 //function whatDoYouDo(job, firstname)
 /****** 
 // Function Expression
 var whatDoYouDo = function(job, firstname) {
   switch(job) {
     case 'teacher':
         return firstname + ' teaches kids how to code.';
     case 'driver':
         return firstname + ' drives a cab in Mumbai.';
     case 'designer':
         return firstname + ' designs beautiful websites.';
     default:
        return firstname + ' does something else.';
    }
 }

 console.log(whatDoYouDo('teacher','Shreya'));
 console.log(whatDoYouDo('designer','Prachi'));
 console.log(whatDoYouDo('driver','Shruti'));
 console.log(whatDoYouDo('retired','Mahek'));
 */


 /*****************************
  * Arrays
  */

  /*
  // Initialize new array
  var names = ['Shreya', 'Shruti', 'Riya'];
  var years = new Array(2000, 2002, 2011);

 console.log(names[2]);
 console.log(names.length);

// Mutate array data
 names[1] = 'Prachi';
 names[names.length] = 'Mahek';
 console.log(names);

 // Different data types 
  var john = ['John', 'Smith', 1990, 'designer', false];

  john.push('blue');
  john.unshift('Mr.');
  console.log(john);

  john.pop();
  john.pop();
  john.shift();
  console.log(john); 

 console.log(john.indexOf(1990));

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
 console.log(isDesigner);
 */


 /******************************************
  * Objects and properties
  */
 /*
  var shreya = {
       firstname: 'Shreya',
       lastname: 'Nogja',
       birthyear: 2002,
       family: ['Prachi', 'Shruti', 'Riya','Mahek'],
       job: 'Dancer',
       isMarried: false
  };
  console.log(shreya.job);
  console.log(shreya.firstname);
  console.log(shreya.lastname);
  var x = 'birthyear';
  console.log(shreya[x]);
  */




 /*********************************
 * Objects and methods 
 */
 /* 
 var shreya = {
    firstname: 'Shreya',
    lastname: 'Nogja',
    birthyear: 2002,
    family: ['Prachi', 'Shruti', 'Riya','Mahek'],
    job: 'Dancer',
    isMarried: false,
    calcAge: function() {
      this.age = 2020 - this.birthyear;
    }
 };
 
 shreya.calcAge();
 console.log(shreya);
 */


 /************************************
  * Loops and iteration
  */

  
  // FOR LOOP
 for (var i = 1; i <= 20; i+=2) {
   console.log(i);
 }

 /*
 var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
 for (var i = 0; i < john.length; i++) {
   console.log(john[i]);
 }

 // While loop
 var i = 0;
 while(i < john.length) {
   console.log(john[i]);
  i++
  }
  */

  // Continue and break statements
 
  var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
  for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
  }

  for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
  }
  
  // Looping backwards
  for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
  }
  

 
  //








