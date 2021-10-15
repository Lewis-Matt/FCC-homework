// We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name 
// of the friend argument to the array stored in user.data.friends and returns that array.

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  user.data.friends.push(friend);
  return user.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
