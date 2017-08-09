var puppyObject = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}]

for (i = 0; i < puppyObject.length; i++) {
  console.log(puppyObject[i].name);
}

var allToys = [];

for (i = 0; i < puppyObject.length; i++) {
  allToys = allToys.concat(puppyObject[i].toys);
}

console.log(allToys);

var findToys = function(dogs, toy) {
  for (var i = 0; i < dogs.length; i++) {
    for (var a = 0; a < dogs[i].toys.length; a++) {
      if(dogs[i].toys[a] === toy) return dogs[i].name;
    }
  }
}

console.log(findToys(puppyObject,"kong"));

$.each( puppyObject , function( key, value ) {
  $('body').append("<img src='"+value.picture+"' />"+'<p>'+value.name+'</p>');
});

var one = ['a','b','c'];

var two = [1,2,3];

var concatLists = function([a],[b]){
  three = $('a.push[b]');
};

concatLists('one','two');

console.log(three);
