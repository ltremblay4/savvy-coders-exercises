var name = prompt('What is your name?');
alert('Hello' + name);

var myCountry = prompt('What is your favrite country?');

var freedomCheck = function(){
  if( myCountry === 'USA' ) alert('Sweet Land of Liberty');
  else if (myCountry === 'Canada') alert('O Canada!');
  else alert('Sounds like you need some DEMOCRACY');
};

freedomCheck();

alert('Thanks for stopping by!');

var status = prompt('Are you done here?');

var bye = function(){
  if( status === 'Yes' ) alert('Later!');
  else if( status === 'No' ) alert('Cool');
  else alert("Make up your mind");
};

bye();

console.log('Good job');
